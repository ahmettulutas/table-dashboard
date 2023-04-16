import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";
import { CommonReducers } from "./types";

const initialState: CommonReducers = {
  isDarkTheme: false,
  lang: "tr"
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: { ...actions }
});

export const { toggleTheme } = commonSlice.actions;
export default commonSlice.reducer;
