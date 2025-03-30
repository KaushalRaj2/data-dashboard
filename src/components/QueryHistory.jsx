import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  // Ensure `history` is always an array to prevent undefined errors
  const queries = useSelector((state) => state.query.history || []);

  return (
    <div className="p-4 border rounded-md bg-white shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Query History</h2>
      {queries.length === 0 ? (
        <p className="text-gray-500">No queries yet.</p>
      ) : (
        <ul className="list-none pl-0">
          {queries.map((query, index) => (
            <li key={index} className="p-2 border-b last:border-b-0 hover:bg-gray-100">
              {query}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryHistory;
