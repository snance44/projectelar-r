import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/projectelar-r/">Home</Link>

      <Link to="/projectelar-r/learning">Learning</Link>

      <Link to="/projectelar-r/aboutus">About Us</Link>
    </div>
  );
}
