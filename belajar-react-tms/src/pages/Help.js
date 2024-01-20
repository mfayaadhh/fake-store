import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Help() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-200 md:mt-20 mt-48">
        <div className="flex justify-center h-full">
          <div className="p-10 bg-white rounded-lg shadow-md w-96 text-center">
            <h2 className="mb-5 text-3xl font-semibold">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or need assistance with our fake store,
              please don't hesitate to reach out. We're here to help!
            </p>
            <h3 className="mb-3 text-2xl font-semibold">Contact Us</h3>
            <p className="text-gray-700 mb-4">
              You can contact us at any time through our Contact page. We aim to
              respond to all inquiries within 24 hours.
            </p>
            <h3 className="mb-3 text-2xl font-semibold">FAQ</h3>
            <div className="border rounded-lg">
              <div
                className="p-3 border-b cursor-pointer"
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <p className="font-semibold">Question 1</p>
              </div>
              {isOpen1 && (
                <div className="p-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna.
                  </p>
                </div>
              )}
              <div
                className="p-3 border-b cursor-pointer"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <p className="font-semibold">Question 2</p>
              </div>
              {isOpen2 && (
                <div className="p-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna.
                  </p>
                </div>
              )}
              <div
                className="p-3 border-b cursor-pointer"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                <p className="font-semibold">Question 3</p>
              </div>
              {isOpen3 && (
                <div className="p-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
