import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
     users: userReducer,
    counter: counterReducer, // you can add more slices here later
  },
});

export default store;
