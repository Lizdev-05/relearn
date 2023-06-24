import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Blog from "./router/Blog";
import About from "./router/About";
import Navbar from "./navbar/Navbar";
import NotFound from "./router/NotFound";
import "./RoutingApp.css";

function RoutingApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutingApp;
