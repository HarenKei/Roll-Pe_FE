"use client";
import { Provider } from "react-redux";
import { store, persistor } from "@/public/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
