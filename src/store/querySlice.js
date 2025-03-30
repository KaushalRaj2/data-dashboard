import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  history: [],
  suggestions: ["Sales Data", "Revenue Trends", "Customer Insights"],
  results: null,
  chartData: [], // Stores data for the chart
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    fetchSuggestions(state) {
      if (state.query.length > 0) {
        state.suggestions = ["Sales Data", "Revenue Trends", "Customer Insights"].filter((s) =>
          s.toLowerCase().includes(state.query.toLowerCase())
        );
      } else {
        state.suggestions = [];
      }
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
    submitQuery(state) {
      if (state.query.trim() !== "") {
        state.history = [state.query, ...state.history];
        state.loading = true;
        state.error = null;
      }
    },
    querySuccess(state, action) {
      state.loading = false;
      state.results = action.payload.results;
      state.chartData = action.payload.chartData;
    },
    queryFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setQuery, fetchSuggestions, clearSuggestions, submitQuery, querySuccess, queryFailure } =
  querySlice.actions;
export default querySlice.reducer;
