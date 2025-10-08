import React, { use } from "react";
import Apps from "../Apps/Apps";
import { Link } from "react-router";

const TrendingApp = ({ dataPromise }) => {
  const appsData = use(dataPromise);
  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-4 mb-16 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* dynamic book section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
          {trendingApps.map((data) => (
            <Apps key={data.id} data={data}></Apps>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to={"/apps"}>
            <button className="px-4 py-1 rounded-sm bg-gradient-to-br from-indigo-600 to-purple-600 text-white cursor-pointer">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApp;
