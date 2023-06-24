import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="--flex-center --p2 --bg-primary">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Bloga</Link>
    </div>
  );
};

export default Navbar;
