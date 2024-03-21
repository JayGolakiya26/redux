import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;
