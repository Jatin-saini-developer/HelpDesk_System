import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

const DashBoard = () => {
  const role = localStorage.getItem("role");

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      {/* Header */}
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-10 py-6">
          <h1 className="text-3xl font-serif mb-10">Dashboard</h1>

          {/* Top Cards */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-[#3396ff] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition duration-300">
              <span className="text-lg font-serif mb-2 text-white">Total Tickets</span>
              <span className="text-6xl font-mono text-white">12</span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#19ff6a] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition duration-300">
              <span className="text-lg font-serif mb-2 text-black">Total Solved</span>
              <span className="text-6xl font-mono text-black">8</span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#ff5c5c] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition duration-300">
              <span className="text-lg font-serif mb-2 text-white">Total Awaiting Approval</span>
              <span className="text-6xl font-mono text-white">2</span>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fff96a] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition duration-300">
              <span className="text-lg font-serif mb-2 text-black">Total in Progress</span>
              <span className="text-6xl font-mono text-black">2</span>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
   
  )
}

export default DashBoard
