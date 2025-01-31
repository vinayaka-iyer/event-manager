import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: "bold",
        fontSize: "36px",
        color: "black", // White text for the logo
        // textAlign: "center",
        marginBottom: "20px", // Adds space below the logo
      }}
    >
      <Link to="/"> EventEase</Link>
    </div>
  );
};

export default Logo;
