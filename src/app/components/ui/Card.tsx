"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import axios from "axios";

export function ThreeDCardDemo({ title, desc, src }: { title: string, desc: string, src?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [mobileNumber, setMobileNumber] = useState(""); // State to capture mobile number

  // Function to handle the opening of the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission (you can implement API call or logic here)
  const handleSend = async() => {
    console.log("Mobile number:", mobileNumber);
    await axios.post('/api/getInfo',{
      phone:mobileNumber
    })
    // You can add logic to send the mobile number, e.g., API request
    closeModal(); // Close the modal after sending
  };

  return (
    <div>
      {isModalOpen && (
        <div className=" inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50  relative">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Enter your mobile number</h3>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            />
            <div className="flex justify-between items-center">
              <button
                onClick={closeModal} // Close modal on cancel
                className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSend} // Handle send action
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={src || 'https://www.valuecoders.com/blog/wp-content/uploads/2018/06/11-tips-successful-mobile-app-development-businesses-android-ios-4-1.jpg'}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={openModal} // Open modal on click
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Get Info
          </CardItem>
        </div>
      </CardBody>

      
    </CardContainer>
    </div>

  );
}
