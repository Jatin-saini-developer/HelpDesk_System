import React from "react";
import { FaSearch, FaUserFriends, FaDownload, FaEye } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

const myTicketData = [
  { id: 1234, subject: "Login issue", category: "Access issue", priority: "High", date: "13/08/21", status: "In Progress" },
  { id: 1124, subject: "New ticket issue", category: "Access issue", priority: "Medium", date: "14/08/21", status: "On hold" },
  { id: 1224, subject: "New request", category: "Feedback", priority: "Low", date: "13/08/21", status: "Closed" },
  { id: 1244, subject: "Ticket submission", category: "Ticketing", priority: "High", date: "14/08/21", status: "In Progress" },
  { id: 1114, subject: "Login issue", category: "Access issue", priority: "High", date: "3/08/21", status: "In Progress" },
];

const statusStyles = {
  "In Progress": "bg-green-500",
  "On hold": "bg-blue-900",
  "Closed": "bg-black",
};

const MyTicketOP = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 px-10 py-6 bg-white">
          <h1 className="text-3xl font-serif mb-6">My Ticket</h1>

          {/* Top Controls */}
          <div className="flex flex-wrap items-center justify-between mb-4">
            {/* Search Box */}
            <div className="relative w-[300px]">
              <input
                type="text"
                placeholder="Find ticket"
                className="w-full border border-gray-300 rounded pl-4 pr-10 py-2 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <FaSearch className="text-gray-600" />
              </button>
            </div>

            {/* Show entries */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">Show:</span>
              <select className="border border-gray-400 bg-gray-200 rounded px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm">Entries</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Ticket No.</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Priority</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Person in charge</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {myTicketData.map((ticket, index) => (
                  <tr key={ticket.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    
                    <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                     <button onClick={() => handleTicketClick(ticket)}>
                     {ticket.id}
                     </button>
                   </td>

                    <td className="px-4 py-2">{ticket.subject}</td>
                    <td className="px-4 py-2">{ticket.category}</td>
                    <td className="px-4 py-2">{ticket.priority}</td>
                    <td className="px-4 py-2">{ticket.date}</td>
                    <td className="px-4 py-2">
                      <span className={`text-white text-xs font-semibold px-2 py-1 rounded ${statusStyles[ticket.status]}`}>{ticket.status}</span>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <FaUserFriends className="inline-block" />
                    </td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <FaEye className="inline-block cursor-pointer" />
                      <FaUserFriends className="inline-block cursor-pointer" />
                      <FaDownload className="inline-block cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-sm">Showing 1 to 5 of 5 entries</p>
            <div className="flex justify-end text-sm mt-2 space-x-1">
              <span className="text-gray-500">«</span>
              <span className="text-black font-semibold">1</span>
              <span className="text-gray-500">»</span>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MyTicketOP;
