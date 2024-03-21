import { createReducer } from "@reduxjs/toolkit";

export const rootReducer = createReducer(
  { isAuthenticated: false },
  {
    login: (state) => {
      debugger
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  }
);
