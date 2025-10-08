import React, { useEffect, useState } from "react";
import Apps from "../Apps/Apps";
import Loading from "../Loading/Loading";

const AllApps = () => {
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItems, setSearchItems] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => setAllApps(json))
      .finally(() => setLoading(false));
  }, []);

  const filteredApps = searchItems
    ? allApps.filter((app) =>
        app.title.toLowerCase().includes(searchItems.toLowerCase())
      )
    : allApps;
  if (loading) return <Loading />;

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-4 mb-16 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">
            ({filteredApps.length}) App Found
          </p>
          <input
            onChange={(e) => setSearchItems(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder={` Search Apps`}
            className="border border-gray-300 focus:outline-none focus:border-purple-400 px-4 py-1 rounded-lg"
          />
        </div>

        {/* dynamic book section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4">
          {filteredApps.map((data) => (
            <Apps key={data.id} data={data}></Apps>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
