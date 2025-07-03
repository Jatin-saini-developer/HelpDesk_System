import React from 'react'
import { ticketData } from "../data/tableData";

const Table = () => {
  return (
    <div>
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
  )
}

export default Table