import React, { Suspense, useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import TrendingApp from "../TrendingApps/TrendingApp";
import Loading from "../Loading/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dataPromise = fetch("/data.json").then((res) => res.json());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <TrendingApp dataPromise={dataPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
