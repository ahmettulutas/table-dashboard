import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";
import { CommonReducers } from "./types";

const initialState: CommonReducers = {
  isDarkTheme: false,
  lang: "tr",
  selectedFilter: undefined,
  selectedItems: []
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: { ...actions }
});

export const { toggleTheme, setSelectedStatusFilter, setSelectedRows } = commonSlice.actions;
export default commonSlice.reducer;
