import { configureStore } from "@reduxjs/toolkit";
import slideMenuReducer from "./redux";
import simpleUserReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    slideMenu: slideMenuReducer,
    simpleUser: simpleUserReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;