import React from "react";
import error from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center  text-center">
      <div>
        <img className="mx-auto" src={error} alt="" />
        <h1 className="text-4xl lg:text-5xl font-bold mt-8">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 mt-4">
          The page you are looking for is not available.
        </p>
        <div className="flex gap-4 justify-center my-8 text-white">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-sm"
          >
            Go Back!
          </button>
          <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-sm">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
