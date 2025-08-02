import React, { useState, useEffect } from "react";
import './index.css';

function Loginpage() {
  const data = { name: "", email: "", password: "" };
  const [inputdata, setInputdata] = useState(data);
  const [flag, setFlag] = useState(false);
  const [islogin, setIslogin] = useState(true);

  useEffect(() => {
    if (flag) {
      console.log("Registered");
    }
  }, [flag]);

  function handlesub(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function submitefun(e) {
    e.preventDefault();
    if ((!inputdata.name && !islogin) || !inputdata.email || !inputdata.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0C67A0]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[320px]">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 rounded-t-lg text-lg font-medium ${
              islogin ? "bg-[#033452] text-white" : "bg-gray-200"
            }`}
            onClick={() => setIslogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 rounded-t-lg text-lg font-medium ${
              !islogin ? "bg-[#033452] text-white" : "bg-gray-200"
            }`}
            onClick={() => setIslogin(false)}
          >
            Signin
          </button>
        </div>

        {islogin ? (
          <form onSubmit={submitefun} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Login Form</h2>
             {flag && (
              <div className="bg-green-100 text-green-800 p-2 rounded text-center">
                Now {inputdata.name}, you are Login!
              </div>
            )}
            <input
              type="text"
              name="email"
              value={inputdata.email}
              onChange={handlesub}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              value={inputdata.password}
              onChange={handlesub}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <div className="text-right text-sm text-blue-600">
              <a href="#">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={submitefun} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>
            {flag && (
              <div className="bg-green-100 text-green-800 p-2 rounded text-center">
                Hi {inputdata.name}, you are registered!
              </div>
            )}
            <input
              type="text"
              name="name"
              value={inputdata.name}
              onChange={handlesub}
              placeholder="Enter Name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="email"
              value={inputdata.email}
              onChange={handlesub}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              value={inputdata.password}
              onChange={handlesub}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Loginpage;
