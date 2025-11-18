'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '212661573626'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Bubble */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">Chat with Fab Tower Suport Team</h3>
            <p className="text-sm text-green-100">We typically reply in minutes</p>
          </div>

          {/* Message Box */}
          <div className="p-4">
            <p className="text-gray-700 text-sm mb-4">
              👋 Hi there! How can we help you today?
            </p>
          </div>

          {/* Action Button */}
          <div className="p-4 border-t border-gray-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Open WhatsApp
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
