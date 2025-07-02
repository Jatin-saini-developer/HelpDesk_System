import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const NewTicket = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on top */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <SideBar />

        {/* Main content on the right */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Create New Ticket</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Ticket No.</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input type="date" className="w-full border p-2 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Department</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
          </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>





        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default NewTicket;
