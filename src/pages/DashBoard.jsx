import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const DashBoard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
      {/* Header */}
      <Header/>
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar/>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center">
          <h1 className="text-3xl font-serif mt-8 mb-8">Dashboard</h1>
          <div className="flex gap-8 mb-8">
            {/* Card 1 */}
            <div className="bg-[#3396ff] rounded-xl shadow-md p-6 w-56 flex flex-col items-center hover:scale-105 transition">
              <span className="text-lg font-serif mb-2 text-black">Total Tickets</span>
              <span className="text-6xl font-mono text-black">12</span>
            </div>
            {/* Card 2 */}
            <div className="bg-[#19ff6a] rounded-xl shadow-md p-6 w-56 flex flex-col items-center hover:scale-105 transition">
              <span className="text-lg font-serif mb-2 text-black">Total Solved</span>
              <span className="text-6xl font-mono text-black">8</span>
            </div>
            {/* Card 3 */}
            <div className="bg-[#ff5c5c] rounded-xl shadow-md p-6 w-56 flex flex-col items-center hover:scale-105 transition">
              <span className="text-lg font-serif mb-2 text-black">Total Awaiting Approval</span>
              <span className="text-6xl font-mono text-black">2</span>
            </div>
            {/* Card 4 */}
            <div className="bg-[#fff96a] rounded-xl shadow-md p-6 w-56 flex flex-col items-center hover:scale-105 transition">
              <span className="text-lg font-serif mb-2 text-black">Total in Progress</span>
              <span className="text-6xl font-mono text-black">2</span>
            </div>
          </div>
          <div className="flex-1"></div>
        </main>
      </div>
      {/* Footer */}
     
    </div>
  )
}

export default DashBoard