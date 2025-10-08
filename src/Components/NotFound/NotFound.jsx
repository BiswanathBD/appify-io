import React from "react";
import { Navigate } from "react-router";
import notFound from "../../assets/not_found.png";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center  text-center">
      <div>
        <img className="mx-auto" src={notFound} alt="" />
        <h1 className="text-4xl lg:text-5xl font-bold mt-8">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-gray-500 mt-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex gap-4 justify-center my-8 text-white">
          <button
            onClick={() => Navigate(-1)}
            className="px-4 py-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-sm"
          >
            Go Back!
          </button>
          <Link to={"/"}>
            <button className="px-4 py-2 bg-indigo-600 rounded-sm">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
