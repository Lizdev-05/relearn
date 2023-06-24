import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Blog from "./router/Blog";
import About from "./router/About";

function RoutingApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingApp;
