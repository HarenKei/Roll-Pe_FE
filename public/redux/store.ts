// import { configureStore } from "@reduxjs/toolkit";
import slideMenuReducer from "./redux";
import simpleUserReducer from "./slices/userSlice";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "@reduxjs/toolkit";

// const reducers = combineReducers({
//   simpleUser: simpleUserReducer,
//   slideMenu: slideMenuReducer,
// });

// // const persistConfig = {
// //   key: "root",
// //   storage,
// //   whitelist: ["simpleUser"],
// // }

// const store = configureStore({
//   reducer: {
//     slideMenu: slideMenuReducer,
//     simpleUser: simpleUserReducer,
//   }
// });




// export default store;

import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// config 작성
const persistConfig = {
  key: 'simpleUser', // 로컬스토리지에 저장할 키값
  storage,
  whitelist: ['simpleUser'], // 저장할 리듀서
};

const reducers = combineReducers({
  simpleUser: simpleUserReducer,
  slideMenu: slideMenuReducer,
});

// persistReduce 생성
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: isDev,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: { // 이부분 추가
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store); 
