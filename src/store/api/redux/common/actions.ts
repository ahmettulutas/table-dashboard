import { PayloadAction } from "@reduxjs/toolkit";
import { Enums } from "~/lib/enums";
import { CommonReducers } from "./types";

const actions = {
  toggleTheme: (state:CommonReducers) => {
    state.isDarkTheme = !state.isDarkTheme;
  },
  setSelectedStatusFilter: (state:CommonReducers, action:PayloadAction<keyof Enums["postStatus"] | undefined>) => {
    state.selectedFilter = action.payload;
  },
  setSelectedRows: (state:CommonReducers, action:PayloadAction<Array<string>>) => {
    state.selectedItems = action?.payload;
  },
  setSearchQuery: (state:CommonReducers, action:PayloadAction<string>) => {
    state.searchQuery = action.payload;
  }
};

export default actions;