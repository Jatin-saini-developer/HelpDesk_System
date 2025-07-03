import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

const OperationDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 flex flex-col px-10 py-6 bg-white">
          <h1 className="text-3xl font-serif mb-10">Dashboard</h1>

          {/* Top Cards */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-[#3396ff] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-lg font-serif mb-2 text-white">Total Tickets</span>
              <span className="text-6xl font-mono text-white">12</span>
            </div>
            <div className="bg-[#19ff6a] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-lg font-serif mb-2 text-black">Total Solved</span>
              <span className="text-6xl font-mono text-black">8</span>
            </div>
            <div className="bg-[#ff5c5c] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-lg font-serif mb-2 text-white">Total Awaiting Approval</span>
              <span className="text-6xl font-mono text-white">2</span>
            </div>
            <div className="bg-[#fff96a] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <span className="text-lg font-serif mb-2 text-black">Total in Progress</span>
              <span className="text-6xl font-mono text-black">2</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Chart Card */}
            <div className="bg-[#5fe0d0] rounded-xl shadow-md p-6 flex justify-center items-center hover:scale-105 transition-transform">
              <img src="./Vector.png" alt="Chart" className="max-w-full max-h-full" />
            </div>

            {/* Right Cards */}
            <div className="flex flex-col space-y-6">
              {/* Team Stats */}
              <div className="bg-[#5fe0d0] rounded-xl shadow-md p-6 flex justify-around hover:scale-105 transition-transform">
                <div className="flex flex-col items-center">
                  <img src="./soporte-tecnico-icono-png-1 2.png" alt="Technical Support" className="w-16 h-16 mb-2" />
                  <span className="text-3xl font-mono">3</span>
                  <span className="text-sm">Technical Supports</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="./69114 2.png" alt="Operation Team" className="w-16 h-16 mb-2" />
                  <span className="text-3xl font-mono">4</span>
                  <span className="text-sm">Operation Team</span>
                </div>
              </div>

              {/* Customer Feedback */}
              <div className="bg-[#5fe0d0] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform">
                <span className="text-lg font-serif mb-4">Customer Feedback</span>
                <div className="flex space-x-1">
                  {/* Example star icons (use your icon library) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.751l-6 5.847L19.335 24 12 20.203 4.665 24 6 15.598 0 9.751l8.332-1.733L12 .587z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.751l-6 5.847L19.335 24 12 20.203 4.665 24 6 15.598 0 9.751l8.332-1.733L12 .587z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.751l-6 5.847L19.335 24 12 20.203 4.665 24 6 15.598 0 9.751l8.332-1.733L12 .587z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.751l-6 5.847L19.335 24 12 20.203 4.665 24 6 15.598 0 9.751l8.332-1.733L12 .587z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.751l-6 5.847L19.335 24 12 20.203 4.665 24 6 15.598 0 9.751l8.332-1.733L12 .587z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OperationDashboard;
