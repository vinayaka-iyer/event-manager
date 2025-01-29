import React from "react";
import { cn } from "@/lib/utils";

const CustomCard = ({ icon: Icon, heading, description }) => {
  return (
    <div className="w-[360px] h-[360px] bg-black text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center mx-auto">
      <div className="bg-gray-800 p-4 rounded-full flex items-center justify-center mb-4">
        {Icon && <Icon className="w-10 h-10 text-gray-400" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{heading}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default CustomCard;
