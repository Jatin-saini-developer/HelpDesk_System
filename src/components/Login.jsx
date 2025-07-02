import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [view, setView] = useState("Login")


   const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // 🔁 redirect user
  };

  const handleForgot = ()=>{
    setView('fogotPassword')
  }

  const handleSignUp= ()=>{
    setView('SignUp')
    console.log('sign up page')
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#2AF5FF] border-2 border-white">
      <div className="bg-[#b2e6e0] border-4 border-blue-500 rounded-md px-8 py-10 min-w-[450px] flex flex-col items-center shadow-md">
        { (view === 'Login' || view === 'SignUp') &&  < >
           <div className="text-3xl font-bold italic mb-8 text-center font-sans">
          Helpdesk System
        </div>

        <input
          className="w-[350px] px-3 py-3 mb-5 text-lg border border-gray-500 rounded font-sans bg-white focus:outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-[350px] px-3 py-3 mb-5 text-lg border border-gray-500 rounded font-sans bg-white focus:outline-none"
          type="password"
          placeholder="Password"
        /> </>}

        {view=='fogotPassword' && <div>
          <p>Don’t worry, Enter your email below and we will <br />
             send you a link to change password. 
          </p>
        </div> } 

        { (view=='SignUp' || view=='fogotPassword') && <input
               className="w-[350px] px-3 py-3 mb-5 text-lg border border-gray-500 rounded font-sans bg-white focus:outline-none"
               type="text"
                placeholder="Email"/>}


        <button 
         onClick={handleSubmit}
         className="w-[250px] py-3 bg-green-600 text-white text-lg rounded-xl font-medium font-sans mb-5 hover:bg-green-700 transition">
         {view=="Login" ? 'Sign In' : "Sign Up"}
        </button>
        <div className="w-[350px] flex flex-row justify-between items-center mt-0">

          <button onClick={handleForgot} type="button" className="text-red-500 text-xs font-sans cursor-pointer ml-1 bg-transparent border-none p-0 hover:underline focus:outline-none">
            Forgot Password
            </button>


          <button onClick={handleSignUp} type="button" className="text-black text-base font-sans cursor-pointer mr-1 bg-transparent border-none p-0 hover:underline focus:outline-none">
           {view=="Login" ? 'Sign Up' : "Sign In"}
            </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
