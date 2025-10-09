import React, { useState } from "react";
import navLogo from "../../assets/Logo.png";
import "./navbar.css";
import { Link, useLocation } from "react-router";
import { FaGithub } from "react-icons/fa";
import { HiMiniBars3CenterLeft, HiOutlineHome } from "react-icons/hi2";
import { BsGrid } from "react-icons/bs";
import { PiDownloadLight } from "react-icons/pi";
import { FaCircleXmark } from "react-icons/fa6";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "!text-purple-600 font-semibold"
      : "text-gray-600";

  return (
    <div className="container mx-auto px-4 flex justify-between items-center my-4">
      <div className="flex gap-4 items-center">
        <HiMiniBars3CenterLeft
          onClick={() => setMobileNav(!mobileNav)}
          className="text-2xl text-gray-600 md:hidden"
        />

        {/* Mobile Nav */}
        <ul
          className={`md:hidden absolute bg-white p-8 border border-purple-300 rounded-xl flex flex-col gap-8 top-4 left-4 shadow-2xl text-lg font-medium ${
            mobileNav || "hidden w-0"
          }`}
        >
          <Link to={"/"}>
            <li
              onClick={() => setMobileNav(!mobileNav)}
              className={`flex items-center gap-4 ${isActive("/")}`}
            >
              <HiOutlineHome />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/apps"}>
            <li
              onClick={() => setMobileNav(!mobileNav)}
              className={`flex items-center gap-4 ${isActive("/apps")}`}
            >
              <BsGrid />
              <span>Apps</span>
            </li>
          </Link>
          <Link to={"/installation"}>
            <li
              onClick={() => setMobileNav(!mobileNav)}
              className={`flex items-center gap-4 pr-8 ${isActive(
                "/installation"
              )}`}
            >
              <PiDownloadLight />
              <span>Installation</span>
            </li>
          </Link>

          <FaCircleXmark
            onClick={() => setMobileNav(!mobileNav)}
            className="absolute text-5xl bg-white border-4 border-white rounded-full text-red-600 -right-6 top-1/2 -translate-y-1/2 bg-red"
          />
        </ul>

        <Link to={"/"}>
          <div className="flex items-center gap-1 text-xl font-light text-purple-700">
            <img className="w-8" src={navLogo} alt="" />
            <h4>Appify.io</h4>
          </div>
        </Link>
      </div>

      <ul className="md:flex items-center gap-4 nav-option hidden">
        <Link to={"/"}>
          <li className={`flex items-center gap-2 ${isActive("/")}`}>
            <HiOutlineHome />
            <span>Home</span>
          </li>
        </Link>
        <Link to={"/apps"}>
          <li className={`flex items-center gap-2 ${isActive("/apps")}`}>
            <BsGrid />
            <span>Apps</span>
          </li>
        </Link>
        <Link to={"/installation"}>
          <li
            className={`flex items-center gap-2 ${isActive("/installation")}`}
          >
            <PiDownloadLight />
            <span>Installation</span>
          </li>
        </Link>
      </ul>

      <Link to={"https://github.com/BiswanathBD"} target="_blank">
        <button className="flex gap-3 items-center px-4 py-1 rounded-sm bg-gradient-to-br from-indigo-600 to-purple-600 text-white cursor-pointer">
          <FaGithub /> <span>Contribute</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
