import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import bgimg from "C:/Users/dhruv.sharma/Desktop/event-manager/src/assets/BG.jpeg";
import Logo from "@/components/ui/Logo";
const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div  style = {{
                
                paddingTop: "15px",
                paddingLeft: "13px"
              }}>  <Logo 
             
              >
                EventEase
              </Logo></div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(171, 148, 148, 0.85)", // HEX #AB9494 with 85% opacity
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "300px",
          }}
        >
            
          <h2
            style={{
              textAlign: "left",
              marginBottom: "20px",
              color: "white", // Text color set to white
              fontSize: 25,
              fontStyle: "bold",
            }}
          >
            Welcome Back
          </h2>
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  color: "white", // Label text color set to white
                }}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "3px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "rgba(171, 165, 165, 1)",
                  color: "white", // Text color inside input set to white
                }}
              />
            </div>
            <div style={{ marginBottom: "18px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "5px",
                  color: "white", // Label text color set to white
                }}
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "3px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "rgba(171, 165, 165, 1)",
                  color: "white", // Text color inside input set to white
                }}
              />
              <Link
                to="/forgot-password"
                style={{
                  color: "rgba(16, 62, 215, 1)",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Forgot your password?
              </Link>
            </div>
            <Button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "black", // Button background
                color: "white", // Button text color
                borderRadius: 0,
              }}
            >
              Submit
            </Button>
            <Link
              to="/register"
              style={{
                color: "rgba(16, 62, 215, 1)",
                textDecoration: "none",
                fontSize: "14px",
                display: "block",
                marginTop: "10px",
                textAlign: "left",
              }}
            >
              Register?
            </Link>
          </Form>
          {/* Divider Line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <hr
              style={{
                border: "none",
                borderTop: "1px solid white",
                flex: 1,
              }}
            />
            <span
              style={{
                margin: "0 10px",
                color: "white",
                fontSize: "14px",
              }}
            >
              Or
            </span>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid white",
                flex: 1,
              }}
            />
          </div>
          {/* Social Login Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <FaGoogle
              style={{
                color: "#DB4437", // Google Red
                fontSize: "36px", // Icon size
                cursor: "pointer",
              }}
              onClick={() => alert("Login with Google clicked!")}
            />
            <FaFacebook
              style={{
                color: "#4267B2", // Facebook Blue
                fontSize: "36px", // Icon size
                cursor: "pointer",
              }}
              onClick={() => alert("Login with Facebook clicked!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
