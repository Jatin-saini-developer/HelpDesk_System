import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-[#5fe0d0] flex items-center justify-between px-6 py-3 shadow-md">
        <div className="text-3xl italic font-bold text-white">
          <span className="font-bold italic">Helpdesk</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
          <button className="ml-2"><i className="fa fa-bell text-black"></i></button>
          <button className="ml-2"><i className="fa fa-user text-black"></i></button>
          <button className="ml-2"><i className="fa fa-cog text-black"></i></button>
          <button className="ml-2"><i className="fa fa-sign-out text-black"></i></button>
        </div>
      </header>
    </div>
  )
}

export default Header