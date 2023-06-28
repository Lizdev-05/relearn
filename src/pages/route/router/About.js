import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Info from "./Info";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is an about page</p>

      {/* Nested Route */}
      <Routes>
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default About;
