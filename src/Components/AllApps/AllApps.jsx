import React, { useEffect, useState } from "react";
import Apps from "../Apps/Apps";
import Loading from "../Loading/Loading";

const AllApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => setAllApps(json))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loading />;

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-4 mb-16 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {/* dynamic book section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
          {allApps.map((data) => (
            <Apps key={data.id} data={data}></Apps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
