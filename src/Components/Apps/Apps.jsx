import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const Apps = ({ data }) => {

  return (
    <div className="bg-white p-4 shadow-xl/5 rounded-xl">
      <div className="bg-gray-200 rounded-sm p-4">
        <img
          className="mx-auto w-full aspect-square object-cover overflow-hidden"
          src={data.image}
          alt=""
        />
      </div>
      <p className="my-2 text-xl font-semibold">{data.title}</p>
      <div className="flex justify-between text-sm">
        <p className="flex gap-2 items-center text-green-500 bg-gray-100 px-2 py-1 rounded-sm">
          <LuDownload />
          <span>{data.downloads}</span>
        </p>
        <p className="flex gap-2 items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-sm">
          <FaStar />
          <span>{data.ratingAvg}</span>
        </p>
      </div>
    </div>
  );
};

export default Apps;
