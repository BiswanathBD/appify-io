import React from "react";
import Hero from "../Hero/Hero";
import TrendingApp from "../TrendingApps/TrendingApp";
import { Suspense } from "react";

const Home = () => {
  const dataPromise = fetch("/data.json").then((res) => res.json());
  return (
    <div>
      <Hero />
      <Suspense>
        <TrendingApp dataPromise={dataPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
