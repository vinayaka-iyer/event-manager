import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import bgimg from "@/assets/BG.jpeg";
import Logo from "@/components/ui/Logo";

const LoginPage = () => {
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

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-white block mb-1">
              Email:
            </label>
            <Input type="email" id="email" name="email" placeholder="Enter your email" className="w-full" />
          </div>

          <div>
            <label htmlFor="password" className="text-white block mb-1">
              Password:
            </label>
            <Input type="password" id="password" name="password" placeholder="Enter your password" className="w-full" />
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