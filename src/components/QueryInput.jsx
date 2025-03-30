import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSuggestions, clearSuggestions, submitQuery, querySuccess, queryFailure } from "../store/querySlice";
import { MagnifyingGlassIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";


const QueryInput = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const suggestions = useSelector((state) => state.query.suggestions);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
    dispatch(fetchSuggestions());
  };

  const handleSelectSuggestion = (suggestion) => {
    dispatch(setQuery(suggestion));
    dispatch(clearSuggestions());
    inputRef.current.focus();
  };

  const handleSubmit = () => {
    if (query.trim() !== "") {
      dispatch(submitQuery());

      setTimeout(() => {
        if (Math.random() > 0.1) {
          dispatch(
            querySuccess({
              results: `Results for: ${query}`,
              chartData: [
                { name: "Jan", value: Math.floor(Math.random() * 100) },
                { name: "Feb", value: Math.floor(Math.random() * 100) },
                { name: "Mar", value: Math.floor(Math.random() * 100) },
                { name: "Apr", value: Math.floor(Math.random() * 100) },
                { name: "May", value: Math.floor(Math.random() * 100) },
              ],
            })
          );
        } else {
          dispatch(queryFailure("Error processing query"));
        }
      }, 1500);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative p-4 border rounded-lg bg-white shadow-md flex flex-col gap-2">
      <div className="relative flex items-center">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your query..."
          className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200 transition"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleSubmit}
        className="flex items-center justify-center mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
      >
        Submit <PaperAirplaneIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default QueryInput;
