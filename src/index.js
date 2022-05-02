import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { stocksApi } from "./services/stocksApi";

import "./index.css";
import App from "./App";
import { fearIndexApi } from "./services/fearIndexApi";

const store = configureStore({
  reducer: {
    [stocksApi.reducerPath]: stocksApi.reducer,
    [fearIndexApi.reducerPath]: fearIndexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false }).concat(
      stocksApi.middleware,
      fearIndexApi.middleware
    ),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
