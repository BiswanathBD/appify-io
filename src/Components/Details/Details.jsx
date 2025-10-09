import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import iconDownloads from "../../assets/icon-downloads.png";
import iconRating from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";
import Rechart from "../Rechart/Rechart";
import NotFound from "../NotFound/NotFound";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const appId = Number(id);
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

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
    const installedRaw = localStorage.getItem("installed");
    try {
      const installed = installedRaw ? JSON.parse(installedRaw) : [];
      if (Array.isArray(installed) && installed.includes(appId)) {
        setIsInstalled(true);
      }
    } catch {
      setIsInstalled(false);
    }
  }, [appId]);

  const handleInstall = (id) => {
    toast.success("App Installed Successfully");
    const raw = localStorage.getItem("installed");
    let installed = [];

    try {
      installed = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(installed)) installed = [installed];
    } catch {
      installed = [];
    }

    if (!installed.includes(id)) {
      installed.push(id);
      localStorage.setItem("installed", JSON.stringify(installed));
      setIsInstalled(true);
    }
  };

  if (loading) return <Loading />;

  const app = allApps.find((a) => a.id === appId);
  if (!app) return <NotFound />;

  return (
    <div className="bg-gray-100 px-4">
      <div className="container mx-auto py-8 border-b border-gray-300">
        <div className="flex gap-8">
          <div className="bg-white h-fit aspect-square p-4 rounded-lg">
            <img className="w-60" src={app.image} alt="" />
          </div>

          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold">{app.title}</h3>
              <p className="text-sm text-gray-500 mt-1 pb-4 border-b border-gray-300">
                Developed by{" "}
                <span className="text-purple-600">{app.companyName}</span>
              </p>
            </div>

            <div className="mt-6 flex gap-12">
              <div className="w-fit text-center">
                <img className="w-6 mx-auto" src={iconDownloads} alt="" />
                <p className="text-sm hidden sm:block text-gray-500 my-2">Downloads</p>
                <h2 className="text-xl font-bold">{app.downloads}</h2>
              </div>
              <div className="w-fit text-center">
                <img className="w-6 mx-auto" src={iconRating} alt="" />
                <p className="text-sm hidden sm:block text-gray-500 my-2">Average Ratings</p>
                <h2 className="text-xl font-bold">{app.ratingAvg}</h2>
              </div>
              <div className="w-fit text-center">
                <img className="w-6 mx-auto" src={iconReview} alt="" />
                <p className="text-sm hidden sm:block text-gray-500 my-2">Total Reviews</p>
                <h2 className="text-xl font-bold">{app.reviews}</h2>
              </div>
            </div>

            <button
              onClick={() => handleInstall(app.id)}
              disabled={isInstalled}
              className={`w-fit px-4 py-1.5 rounded-sm text-white text-sm my-4 
              ${
                isInstalled
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size}MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Rating Chart */}
      <Rechart ratings={app.ratings} />

      <div className="container mx-auto px-4 border-t border-gray-300 py-8">
        <p className="mb-2 text-xl font-bold">Description</p>
        <p className="text-gray-500">{app.description}</p>
      </div>
    </div>
  );
};

export default Details;
