import React from "react";
import navLogo from "../../assets/Logo.png";
import "./navbar.css";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center my-4">
      <Link to={"/"}>
        <div className="flex items-center gap-1 text-xl font-light text-sky-900">
          <img className="w-8" src={navLogo} alt="" />
          <h4>Appify.io</h4>
        </div>
      </Link>
      <ul className="flex items-center gap-4 nav-option">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"./apps"}>
          <li>Apps</li>
        </Link>
        <Link>
          <li>Installation</li>
        </Link>
      </ul>

      <Link to={"https://github.com/BiswanathBD"}>
        <button className="flex gap-3 items-center px-4 py-1 rounded-sm bg-gradient-to-br from-gray-600 to-sky-600 text-white cursor-pointer">
          <FaGithub /> <span>Contribute</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
