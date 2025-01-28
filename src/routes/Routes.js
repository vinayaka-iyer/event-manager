import React from "react";
import { Routes, Router, Route } from "react-router-dom";

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {/* protected routes */}
          {/* <Route element={<RequireAuth />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/tasks/create" element={<CreateTaskPage />} />
                  </Route> */}

          {/* public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/solutions" element={<DocsPage />} />
          <Route path="/pricing" element={<DocsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
