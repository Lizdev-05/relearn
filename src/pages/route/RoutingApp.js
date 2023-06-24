import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./router/Home";
import Blog from "./router/Blog";
import About from "./router/About";
import Navbar from "./navbar/Navbar";
import NotFound from "./router/NotFound";
import "./RoutingApp.css";
import { useState } from "react";

function RoutingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/blogs" element={<Blog />} />

          {/* ################   REDIRRECT   #####################         */}
          <Route
            path="/view"
            element={
              isLoggedIn ? (
                <Navigate to="/blogs" />
              ) : (
                <h4>You have to log in to access the blog</h4>
              )
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutingApp;
