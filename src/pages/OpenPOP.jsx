// src/components/PopupModal.jsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {
      setIsOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg text-center">
        {/* Close Icon */}
        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-4 ">Welcome to Smart SK  Computer Coaching</h2>

        <p className="mb-4 text-gray-700">
           Start your journey with our professional computer courses:
        </p>

        <ul className="text-left mb-4 text-gray-800 font-medium list-disc list-inside">
          <p>DCA </p>
          <p>PGDCA </p>
          <p> TALLY </p>
           <p>⌨CPCT Preparation & Typing</p>
           
        </ul>

        <p className="text-sm text-gray-600">✅ 100% Practical Training |  Certified Faculty</p>
        <button className="bg-red-500 text-white p-3 rounded m-5 font-bold"><a href="/Register">Go To Register</a></button>
      </div>
    </div>
  );
};

export default PopupModal;
