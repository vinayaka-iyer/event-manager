import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import bgimg from "@/assets/BG.jpeg";
import Logo from "@/components/ui/Logo";
import { useDispatch } from "react-redux";
import { jwtDecode } from 'jwt-decode';

import { login } from "../services/auth/authSlice.js";
import { useLoginMutation } from "../services/auth/authApiSlice";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [loginMutation, {isLoading}] = useLoginMutation()

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      console.log(credentials)
      const data = await loginMutation( credentials ).unwrap()
      const decoded = jwtDecode(data.token);
      dispatch(login({ token: data.token, user: decoded.userId, username:decoded.username })); // Dispatch login action
      alert("Login successful");
      navigate("/"); // Redirect to home page
    } catch (error) {console.log(error)
      console.log(error.response?.data?.message || "Login failed");
      alert("Error: Login failed.");
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="absolute top-4 left-4">
        <Logo>EventEase</Logo>
      </div>

      <div className="bg-gray-700 bg-opacity-85 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-white text-xl font-bold mb-4">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-white block mb-1">
              Email:
            </label>
            <Input type="text"
                   id="username"
                   name="username" 
                   value={credentials.username}
                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                   placeholder="Enter your username" 
                   className="w-full" />
          </div>

          <div>
            <label htmlFor="password" className="text-white block mb-1">
              Password:
            </label>
            <Input type="password" 
                   id="password" 
                   name="password" 
                   value={credentials.password}
                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                   placeholder="Enter your password" 
                   className="w-full" />
            <Link to="/forgot-password" className="text-blue-500 text-sm block mt-1">
              Forgot your password?
            </Link>
          </div>

          <Button className="w-full bg-black text-white py-2">Submit</Button>
        </form>

        <Link to="/register" className="text-blue-500 text-sm block mt-3">
          Register?
        </Link>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-white" />
          <span className="text-white mx-2 text-sm">Or</span>
          <hr className="flex-1 border-white" />
        </div>

        <div className="flex justify-center space-x-6">
          <FaGoogle className="text-red-600 text-3xl cursor-pointer" onClick={() => alert("Login with Google clicked!")} />
          <FaFacebook className="text-blue-600 text-3xl cursor-pointer" onClick={() => alert("Login with Facebook clicked!")} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;