import React from "react";
import logo from "../../assets/Logo.png";

const Loading = () => {
  return (
    <div className="w-screen h-[300px] flex justify-center items-center">
      <h1 className="flex justify-center items-center text-5xl font-bold text-violet-950/60">
        <span className="animate-pulse">L</span>
        <img className="w-16 animate-spin" src={logo} alt="" />
        <span className="animate-pulse">ading...</span>
      </h1>
    </div>
  );
};

export default Loading;
