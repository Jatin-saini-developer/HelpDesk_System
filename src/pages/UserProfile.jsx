import React from "react";
import UserProfileCard from "../components/UserProfileCard";
import FeedbackBox from "../components/FeedbackBox";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const UserProfile = () => {
  return (
    <>
    <Header/>
    <div className='flex'>
    <SideBar/>
    <div className="p-6  flex-1">
      <h1 className="text-xl font-semibold mb-4">User Profile</h1>

      <div className="bg-teal-200 p-10 rounded flex gap-10 flex-wrap">
        <UserProfileCard />
        <FeedbackBox />
      </div>
    </div>
    </div>
    </>
  );
};

export default UserProfile;
