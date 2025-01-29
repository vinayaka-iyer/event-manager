import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SolutionsPage from "@/pages/SolutionsPage";
import PricingPage from "@/pages/PricingPage";

import Navbar from "@/components/layout/Navbar";
import LandingPage from "@/pages/LandingPage";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/services/auth/authSlice";
import CreateEventPage from "@/pages/CreateEventPage";
import Page2 from "@/components/EventForm/Page2";
import Summary from "@/components/EventForm/Summary";

const AppRoutes = () => {
  const location = useLocation(); // Get current route

  // Conditionally render Navbar based on route
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  const user = useSelector(selectCurrentUser);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/summary" element={<Summary />} />

        {/* Conditional home route */}
        <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </>
  );
};

const RoutesComponent = () => {
  return (
    <Router>
      <AppRoutes /> {/* This ensures useLocation() is inside Router */}
    </Router>
  );
};

export default RoutesComponent;
