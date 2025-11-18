'use client';

import { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function EmailButton() {
  const [isOpen, setIsOpen] = useState(false);

  const email = 'fabtower.contact@gmail.com'; // Replace with your email
  const subject = 'Inquiry from Website';
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-50 right-6 z-40 flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
        aria-label="Send us an email"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Mail className="w-6 h-6" />
        )}
      </button>

      {/* Info Bubble */}
      {isOpen && (
        <div className="fixed bottom-70 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-red-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">Email us</h3>
            <p className="text-sm text-red-100">We'll get back to you soon</p>
          </div>

          {/* Message Box */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              ✉️ Send us an email and we'll respond within 24 hours.
            </p>
          </div>

          {/* Action Button */}
          <div className="p-4 border-t border-gray-200">
            <a
              href={emailUrl}
              className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
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
