import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()
  const role = localStorage.getItem("role");

  const handleNewTicket = ()=>{
    navigate('/newTicket')

  }

  const handleMyTicket = ()=>{
    navigate('/myTicket')

  }
  const handleDashboard = ()=>{
    navigate('/dashboard')

  }
  return (
    <div>
        <aside className="w-56 bg-[#e5e5e5] p-4 flex flex-col min-h-[calc(100vh-96px)]">
          {role=="operation" ?(
        <>
          <Link to="/dashboard" className="block py-2">Dashboard</Link>
          <Link to="/ticket-approval" className="block py-2">Ticket Approval</Link>
          <Link to="/my-ticket" className="block py-2">My Ticket</Link>
          <Link to="/performance" className="block py-2">Performance</Link>
        </>
      ): 
          <nav className="mt-4 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer font-semibold text-lg">
              <i className="fa fa-th-large"></i>
              <button 
              onClick={handleDashboard}
              className='cursor-pointer text-lg'>Dashboard</button>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <i className="fa fa-ticket"></i>
              <button 
              onClick={handleNewTicket}
              className='cursor-pointer text-lg'>New Ticket</button>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <i className="fa fa-briefcase"></i>
              <button 
              onClick={handleMyTicket}
              className='cursor-pointer text-lg'>My Ticket</button>
            </div>
          </nav>}
        </aside>
    </div>
  )
}

export default SideBar