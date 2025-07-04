import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const NewTicket = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Create New Ticket</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Ticket No.</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input type="date" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Department</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <div className="relative">
                <textarea
                  rows="5"
                  className="w-full border p-2 pr-10 rounded resize-none bg-[#C4C4C4]"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Type</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Priority</label>
              <input type="text" className="w-full border p-2 rounded bg-[#C4C4C4]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <div className="border p-4 rounded w-fit">
              <label>
                <input type="checkbox" className="mr-2" /> I'm not a robot
              </label>
            </div>

            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewTicket;
