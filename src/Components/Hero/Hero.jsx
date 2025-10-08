import React from "react";
import { Link } from "react-router";
import "./hero.css";
import playStoreImg from "../../assets/playstore.png";
import appStoreImg from "../../assets/appstore.png";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto px-4 text-center pt-12">
        <h1 className="text-6xl font-bold leading-tight">
          We Build <br />
          <span className="text-purple-600 font-extrabold">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-gray-500 mt-8">
          At Appify.io, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 store">
          <Link>
            <button>
              <img className="w-6" src={playStoreImg} alt="" />
              <span>Google Play</span>
            </button>
          </Link>
          <Link>
            <button>
              <img className="w-7" src={appStoreImg} alt="" />
              <span>App Store</span>
            </button>
          </Link>
        </div>

        <img className="mx-auto pt-8" src={heroImg} alt="" />
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center py-20">
        <h1 className="text-4xl font-semibold">
          Trusted by Millions, Built for You
        </h1>
        <div className="mt-8 flex flex-col md:flex-row gap-20 justify-center">
          <div>
            <p className="font-light text-sm">Total Downloads</p>
            <h1 className="text-6xl font-bold my-4">29.6M</h1>
            <p className="font-light text-sm">21% more than last month</p>
          </div>
          <div>
            <p className="font-light text-sm">Total Reviews</p>
            <h1 className="text-6xl font-bold my-4">906K</h1>
            <p className="font-light text-sm">46% more than last month</p>
          </div>
          <div>
            <p className="font-light text-sm">Active Apps</p>
            <h1 className="text-6xl font-bold my-4">132+</h1>
            <p className="font-light text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
