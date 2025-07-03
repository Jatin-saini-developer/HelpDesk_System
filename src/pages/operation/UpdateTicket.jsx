import React from "react";
import { FaUserPlus, FaRedo } from "react-icons/fa";

const UpdateTicket = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 z-50 min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl border border-blue-500 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-serif text-center mb-6">
          My Ticket - Close Ticket
        </h2>

        <div className="bg-teal-300 rounded-xl p-6 space-y-4">
          {/* Row 1: Ticket No + Remark */}
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Ticket No."
                className="w-full px-4 py-2 rounded border focus:outline-none italic"
              />
              <input
                type="text"
                placeholder="Team name"
                className="w-full mt-3 px-4 py-2 rounded border focus:outline-none"
              />
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Team Member"
                  className="w-full px-4 py-2 rounded-full border focus:outline-none pr-10"
                />
                <FaUserPlus className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
              </div>
            </div>

            <textarea
              placeholder="Remark"
              rows={5}
              className="w-1/2 px-4 py-2 rounded border focus:outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="text-xl text-black hover:text-gray-700">
              <FaRedo />
            </button>

            <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded shadow hover:bg-gray-600">
              Close Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTicket;
