import { CommonReducers } from "./types";

const actions = {
  toggleTheme: (state:CommonReducers) => {
    state.isDarkTheme = !state.isDarkTheme;
  }
};

export default actions;