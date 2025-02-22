import { configureStore } from "@reduxjs/toolkit";
import slideMenuReducer from "./redux";
import simpleUserReducer from "./slices/userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// const reducers = combineReducers({
//   simpleUser: simpleUserReducer,
//   slideMenu: slideMenuReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["simpleUser"],
// }

const store = configureStore({
  reducer: {
    slideMenu: slideMenuReducer,
    simpleUser: simpleUserReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;