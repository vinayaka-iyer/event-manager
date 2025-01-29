import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import bgimg from "@/assets/BG.jpeg";
import Logo from "@/components/ui/Logo";

import { register } from "../services/auth/authSlice.js";
import { useRegisterMutation } from "../services/auth/authApiSlice";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [registerMutation, {isLoading}] = useRegisterMutation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await registerUser({ username, password });
      const data = await registerMutation( credentials ).unwrap()
      dispatch(register(credentials))
      alert("User registered successfully");
      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      alert("Error: Registration failed.");
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
        <h2 className="text-white text-xl font-bold mb-4">Let's get Started</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-white block mb-1">
              Name:
            </label>
            <Input type="text" 
                   id="username" 
                   name="username" 
                   value={credentials.username}
                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                   placeholder="Enter your name" 
                   className="w-full" />
          </div>

          <div>
            <label htmlFor="phone" className="text-white block mb-1">
              Phone:
            </label>
            <Input type="tel" 
                   id="phone" 
                   name="phone" 
                   placeholder="Enter your phone" 
                   className="w-full" />
          </div>

          <div>
            <label htmlFor="email" className="text-white block mb-1">
              Email:
            </label>
            <Input type="email" 
                   id="email" 
                   name="email" 
                   placeholder="Enter your email" 
                   className="w-full" />
          </div>

          <div>
            <label htmlFor="password" 
                   className="text-white block mb-1">
              Password:
            </label>
            <Input type="password" 
                   id="password" 
                   name="password" 
                   value={credentials.password}
                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                   placeholder="Enter your password" 
                   className="w-full" />
          </div>

          <Button className="w-full bg-black text-white py-2">Register</Button>
        </form>

        <Link to="/login" className="text-blue-500 text-sm block mt-3">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
