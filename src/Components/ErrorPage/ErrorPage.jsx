import React from "react";
import error from "../../assets/error-404.png";
import { useNavigate } from "react-router";
import { Link } from "react-router";

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
            className="px-4 py-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-sm"
          >
            Go Back!
          </button>
          <Link to={"/"}>
            <button className="px-4 py-2 bg-indigo-600 rounded-sm">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
