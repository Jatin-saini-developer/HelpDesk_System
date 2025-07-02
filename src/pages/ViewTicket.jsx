import React from "react";

const ViewTicket = ({ ticket ,onClose }) => {if (!ticket) return null; 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white w-[500px] rounded shadow-lg p-6">
        <h2 className="text-center text-lg font-semibold mb-4">Ticket Details</h2>

        <div className="border border-dotted border-blue-400 p-4 text-sm leading-6">
            
          <p>Ticket No: {ticket.id}</p>
          <p>Date:{ticket.date}</p>
          <p>Name:{ticket.id}</p>
          <p>Dept:{ticket.id}</p>
          <br />
          <p>Title:{ticket.subject}</p>
          <p>Description:</p>
          <p>Category:</p>
          <p>Type:</p>
          <p>Priority:</p>
          <p>Status:{ticket.status}</p>
          <p>Attachment:</p>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTicket;
