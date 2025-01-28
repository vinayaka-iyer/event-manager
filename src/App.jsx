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
import CreateEventPage from "./pages/CreateEventPage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
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
            <Route path="/create" element={<CreateEventPage />} />

            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/summary" element={<Summary />} />

            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
