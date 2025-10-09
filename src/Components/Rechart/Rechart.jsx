import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Rechart = ({ ratings }) => {
  const data = [...ratings].reverse();

  return (
    <div className="text-xs h-60 container mx-auto px-4 pb-4">
      <h3 className="text-xl font-semibold mt-4 ml-10">Ratings</h3>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 100, left: 20, bottom: 20 }}
        >
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip wrapperStyle={{ width: 150, backgroundColor: "#ccc" }} />

          <Bar dataKey="count" fill="#FF8811" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
