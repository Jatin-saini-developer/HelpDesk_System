import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { ticketData } from "../data/tableData";
import ViewTicket from "./ViewTicket";


const MyTicket = () => {

  const [selectedTicket , setSelectedTicket] = useState(null);
  const [showTicket, setShowTicket] = useState(false);

  const handleTicketClick = (ticket)=>{
    setSelectedTicket(ticket);
    setShowTicket(true);
  }

  return (
    <div>
      <Header />
      <div className="flex flex-1 ">
        <SideBar />
        <div className="flex-1 p-8 ">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            List of Ticket
          </h1>

          <div>
            <input
              type="text"
              placeholder="Find ticket"
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
            />
            <p>show 10 entries</p>
          </div>

          <div className="p-6 overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm shadow-sm rounded">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 uppercase text-xs">
                  <th className="p-2 border">Ticket No.</th>
                  <th className="p-2 border">Subject</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Support</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Rate</th>
                </tr>
              </thead>

              <tbody>
                {ticketData.map((ticket)=>(
                  <tr>
                    <td  className="p-3 border"> 
                     <a href="#" className="text-blue-600 underline" 
                     onClick={(e)=>{e.preventDefault();
                                    handleTicketClick(ticket) }}>
                     {ticket.id}
                     </a>
                </td>
                    <td  className="p-3 border">{ticket.subject}</td>
                    <td  className="p-3 border "> <span className={`${ticket.status=="In Progress" ? "bg-green-500" :ticket.status=="On hold" ? "bg-blue-950" : ticket.status=="Closed" ?'bg-gray-800':''}`}>{ticket.status}</span></td>
                    <td  className="p-3 border">{ticket.supportBy}</td>
                    <td  className="p-3 border">{ticket.date}</td>
                    <td  className="p-3 border">
                     {"★".repeat(ticket.rating)}
                     {"☆".repeat(5 - ticket.rating)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      {showTicket && (
        <ViewTicket ticket={selectedTicket} onClose={() => setShowTicket(false)} />
      )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyTicket;
