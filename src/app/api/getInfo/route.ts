import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

interface ContactMessage {
  phone:Number
  createdAt: Date;
}

export async function POST(request: Request) {
  try {
    const body: ContactMessage = await request.json();

    const { phone } = body;

    // Validate input
    if (!phone) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('cohortech');
    const collection = db.collection<ContactMessage>('getInfo'); 

    const result = await collection.insertOne({
        phone,
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
