import React from 'react'

const SideBar = () => {
  return (
    <div>
        <aside className="w-56 bg-[#e5e5e5] p-4 flex flex-col min-h-[calc(100vh-96px)]">
          <nav className="mt-4 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer font-semibold text-lg">
              <i className="fa fa-th-large"></i>
              <span>Dashboard</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <i className="fa fa-ticket"></i>
              <span>New Ticket</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <i className="fa fa-briefcase"></i>
              <span>My Ticket</span>
            </div>
          </nav>
        </aside>
    </div>
  )
}

export default SideBar