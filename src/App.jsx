import { Provider } from "react-redux";
import store from "./stores/store";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SolutionsPage from "@/pages/SolutionsPage";
import PricingPage from "@/pages/PricingPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

function AppContent() {
  const location = useLocation(); // Get current route

  // Conditionally render Navbar based on route
  const hideNavbarRoutes = ["/login", "/register"]; // Add more routes if needed
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />} 
      <Routes>
        {/* Protected routes examples */}
        {/* <Route element={<RequireAuth />}>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/create" element={<CreateTaskPage />} />
        </Route> */}

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
