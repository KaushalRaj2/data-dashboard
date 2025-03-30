import React from "react";
import QueryInput from "./components/QueryInput";
import QueryResults from "./components/QueryResults";
import QueryHistory from "./components/QueryHistory";
import Navbar from "./components/Navbar";

const App = () => {
  return (

    
  <div>
    <Navbar />
    <main className="p-6">
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-50 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Data Query Dashboard</h1>
      <QueryInput />
      <QueryResults />
      <QueryHistory />
    </div>
    </main>

  </div>
  );
};

export default App;
