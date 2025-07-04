import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Header = () => {
   const navigate = useNavigate()

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/')

  }

 

  const handleUserClick= ()=>{
    navigate('/user')

  }
  return (
    <div>
        <header className="bg-[#5fe0d0] flex items-center justify-between px-6 py-3 shadow-md">
        <div className="text-3xl italic font-bold text-white">
          <span className="font-bold italic">Helpdesk</span>
        </div>
        <div className="flex items-center  space-x-2">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BM</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded">BI</span>
          <button className="ml-2 cursor-pointer font-semibold">< FaBell className=' w-[26px] h-[28px]'/></button>

          <button 
          onClick={handleUserClick}
          className="ml-2 cursor-pointer font-semibold"><FaUser className=' w-[26px] h-[28px]'/></button>

          <button onClick={handleLogout} className="ml-2 cursor-pointer font-semibold"><FaSignOutAlt className=' w-[26px] h-[28px]' /></button>
        </div>
      </header>
    </div>
  )
}

export default Header