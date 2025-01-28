import { Provider } from "react-redux";
import store from "./stores/store";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SolutionsPage from "@/pages/SolutionsPage";
import PricingPage from "@/pages/PricingPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
              {/* protected routes examples */}
              {/* <Route element={<RequireAuth />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/tasks/create" element={<CreateTaskPage />} />
                  </Route> */}

              {/* public routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/" element={<LandingPage />}>
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
