import React from "react";
import CustomCard from "@/components/CustomCard";

const dummyData = [
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    heading: "Add New",
    description: "Create a new item easily.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5M3.75 15h16.5M10.5 3.75v16.5M13.5 3.75v16.5"
        />
      </svg>
    ),
    heading: "Grid View",
    description: "Switch to a grid-based layout.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25m0 13.5V15m-7.5 4.5V15m0-6V5.25"
        />
      </svg>
    ),
    heading: "Adjust Settings",
    description: "Customize your preferences.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    heading: "Add New",
    description: "Create a new item easily.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5M3.75 15h16.5M10.5 3.75v16.5M13.5 3.75v16.5"
        />
      </svg>
    ),
    heading: "Grid View",
    description: "Switch to a grid-based layout.",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25m0 13.5V15m-7.5 4.5V15m0-6V5.25"
        />
      </svg>
    ),
    heading: "Adjust Settings",
    description: "Customize your preferences.",
  },
];

const SolutionsPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-7xl font-bold text-center my-5">Our Solutions</h1>
      <div className="xl:grid xl:grid-cols-3 flex flex-col gap-6 max-w-3/5 mx-auto mt-5">
        {dummyData.map((data, index) => (
          <CustomCard
            key={index}
            icon={data.icon}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
