import React, { useEffect, useState, useMemo } from "react";
import Loading from "../Loading/Loading";
import "./installation.css";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Installation = () => {
  const [allApps, setAllApps] = useState([]);
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const installed = useMemo(() => {
    const installedRaw = localStorage.getItem("installed");
    return installedRaw ? JSON.parse(installedRaw) : [];
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => setAllApps(json))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtered = allApps.filter((app) => installed.includes(app.id));
    setInstalledApps(filtered);
  }, [allApps, installed]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const installedRaw = localStorage.getItem("installed");
        const installedList = installedRaw ? JSON.parse(installedRaw) : [];
        const updatedInstalled = installedList.filter((appId) => appId !== id);
        localStorage.setItem("installed", JSON.stringify(updatedInstalled));

        setInstalledApps((prev) => prev.filter((app) => app.id !== id));
        toast.error("App Uninstalled", {
          position: "top-center",
        });
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-4 mb-16 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">
            ({installedApps.length}) App Found
          </p>
          <div className="custom-select-wrapper">
            <select className="custom-select text-sm">
              <option value="disable">Sort By Size</option>
              <option value="1">Low to High</option>
              <option value="2">High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-2 rounded-lg flex gap-4 items-center"
            >
              <div className="h-16 aspect-square bg-gray-200 p-2 rounded-sm">
                <img className="h-full" src={app.image} alt={app.title} />
              </div>

              <div>
                <p className="font-semibold text-xl mb-2">{app.title}</p>
                <div className="flex gap-4">
                  <p className="flex items-center gap-1 text-sm text-green-500">
                    <LuDownload /> {app.downloads}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-yellow-500">
                    <FaStar /> {app.ratingAvg}
                  </p>
                  <p className="text-gray-500">{app.size} MB</p>
                </div>
              </div>

              <div className="flex-grow flex justify-end pr-4">
                <button
                  onClick={() => handleDelete(app.id)}
                  className="px-3 py-1 rounded-sm bg-red-500 text-white font-semibold"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
