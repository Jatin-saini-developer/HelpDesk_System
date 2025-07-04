import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaThLarge, FaTicketAlt, FaBriefcase } from "react-icons/fa";

const SideBar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleNewTicket = () => {
    navigate("/newTicket");
  };

  const handleMyTicket = () => {
    navigate("/myTicket");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <aside className="w-56 bg-[#e5e5e5] p-4 flex flex-col h-full min-h-[calc(100vh-96px)]">
        {role === "operation" ? (
          <nav className="mt-4 space-y-4 font-semibold text-lg">
            <Link to="/op-dashboard" className="flex items-center space-x-3">
              <FaThLarge className="text-xl" />
              <span>Dashboard</span>
            </Link>

            <Link to="/ticket-approval" className="flex items-center space-x-3">
              <FaTicketAlt className="text-xl" />
              <span>Ticket Approval</span>
            </Link>

            <Link to="/my-ticket" className="flex items-center space-x-3">
              <FaBriefcase className="text-xl" />
              <span>My Ticket</span>
            </Link>

            <Link to="/performance" className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
              </svg>
              <span>Performance</span>
            </Link>
          </nav>
        ) : (
          <nav className="mt-4 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer font-semibold text-lg">
              <FaThLarge />
              <button
                onClick={handleDashboard}
                className="cursor-pointer text-lg"
              >
                Dashboard
              </button>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <FaTicketAlt />
              <button
                onClick={handleNewTicket}
                className="cursor-pointer text-lg"
              >
                New Ticket
              </button>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer text-lg">
              <FaBriefcase />
              <button
                onClick={handleMyTicket}
                className="cursor-pointer text-lg"
              >
                My Ticket
              </button>
            </div>
          </nav>
        )}
      </aside>
    </div>
  );
};

export default SideBar;
