import { configureStore } from "@reduxjs/toolkit";
import slideMenuReducer from "./redux";

const store = configureStore({
  reducer: {
    slideMenu: slideMenuReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;