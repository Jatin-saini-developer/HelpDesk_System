import React from "react";
import { FaUserCircle, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserProfileCard = () => {
  const navigate = useNavigate()

  const handleUserInformation = ()=>{
    navigate('/userInformation')
  }
  return (
    <div className="relative bg-white rounded-lg shadow p-6 w-[300px] text-center">
      {/* Edit Icon */}
      <div className="absolute top-2 right-2 text-gray-600 cursor-pointer">
        <FaRegEdit   onClick={handleUserInformation}  />
      </div>

      {/* Profile Icon */}
      <div className="flex justify-center mb-4">
        <FaUserCircle
      
        className="text-7xl text-gray-400" />
      </div>

      {/* User Info */}
      <div className="text-left text-sm">
        <p><strong>Username</strong></p>
        <p>Contact Number</p>
        <p>Email</p>
        <p>Department</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
