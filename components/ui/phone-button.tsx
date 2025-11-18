'use client';

import { useState } from 'react';
import { Phone, X } from 'lucide-react';

export default function PhoneButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '+212661573626'; // Replace with your phone number
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 right-6 z-40 flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
        aria-label="Call us"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </button>

      {/* Info Bubble */}
      {isOpen && (
        <div className="fixed bottom-48 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">Call us</h3>
            <p className="text-sm text-blue-100">We're available to help</p>
          </div>

          {/* Message Box */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              📞 Ready to speak with our team? Give us a call!
            </p>
          </div>

          {/* Action Button */}
          <div className="p-4 border-t border-gray-200">
            <a
              href={phoneUrl}
              className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}

      {/* Backdrop for chat bubble */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
