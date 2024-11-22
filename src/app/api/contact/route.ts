import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

interface ContactMessage {
    fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}

export async function POST(request: Request) {
  try {
    const body: ContactMessage = await request.json();

    const { fullName, email, message } = body;

    // Validate input
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('cohortech');
    const collection = db.collection<ContactMessage>('contact'); 

    const result = await collection.insertOne({
        fullName,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
