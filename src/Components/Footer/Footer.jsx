import React from "react";
import navLogo from "../../assets/Logo.png";
import { Link } from "react-router";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black pt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-8">
        <div>
          <p className="text-gray-400 w-3/4 text-center mx-auto">
            Explore a world of amazing apps tailored for you. From productivity
            to entertainment — download what you love. Fast performance, secure
            files, and a smooth experience every time.
          </p>
        </div>
        <div className="relative">
          <Link to={"/"}>
            <img
              className="w-1/3 brightness-200 py-4 mx-auto"
              src={navLogo}
              alt=""
            />
            <img
              className="w-1/3 brightness-150 py-4 left-1/2 -translate-x-1/2 absolute top-0 hover:blur-sm"
              src={navLogo}
              alt=""
            />
          </Link>
        </div>
        <div>
          <p className="mb-1 px-8 text-center text-xl font-semibold">
            Social Link
          </p>
          <div className="flex gap-4 justify-center mt-4 text-5xl">
            <Link>
              <FaSquareTwitter className="hover:text-sky-500 hover:bg-white rounded-lg" />
            </Link>
            <Link>
              <FaLinkedin className="hover:text-blue-500 hover:bg-white rounded-sm" />
            </Link>
            <Link>
              <FaFacebookSquare className="hover:text-blue-500 hover:bg-white rounded-md" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center py-4 mt-4 border-t border-gray-700 text-gray-400">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
