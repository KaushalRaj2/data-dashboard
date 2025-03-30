import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartBarIcon } from "@heroicons/react/24/outline";


const QueryResults = () => {
  const { results, chartData, loading, error } = useSelector((state) => state.query);

  return (
    <div className="mt-4 p-4 bg-white shadow rounded-lg">
      {loading && <p className="text-gray-500 animate-pulse">Processing query...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results && (
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <ChartBarIcon className="w-5 h-5" />
          {results}
        </div>
      )}

      {chartData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Data Visualization</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default QueryResults;
