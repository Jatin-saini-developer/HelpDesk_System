import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import { FaUser } from "react-icons/fa";

const Performance = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-1">
        <SideBar />

        <div className="flex-1 p-10">
          <h1 className="text-2xl font-serif mb-6">Performance</h1>

          <div className="flex gap-12">
            {/* Left Main Block */}
            <div className="w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                  <FaUser className="text-4xl" />
                </div>
                <h2 className="text-xl font-serif">Operation Name</h2>
              </div>

              <div className="bg-gray-200 rounded-xl px-4 py-3 w-[320px] mb-4">
                <p className="font-semibold">Contact No: 0123456789</p>
                <p className="font-semibold">Department: ABC</p>
              </div>

              <div className="bg-gray-200 rounded-xl px-4 py-4 w-[400px]">
                <p className="font-semibold mb-2">Total Ticket Handle <span className="float-right">5</span></p>
                <p>Ticket Solved <span className="float-right">2</span></p>
                <p>Ticket Pending <span className="float-right">1</span></p>
                <p>Ticket in progress <span className="float-right">2</span></p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Rating</span>
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </div>
              </div>
            </div>

            {/* Right Side Team Members */}
            <div className="space-y-6 mt-4">
              {["Operation Name 1", "Operation Name 2", "Operation Name 3"].map((name, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                    <FaUser className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">{name}</h3>
                    <button className="mt-1 bg-teal-400 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-500">
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Performance;
