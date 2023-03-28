import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
import "./index.css"
import savedSlice from "./savedSlice";

const domNode = document.getElementById("container");
const root = createRoot(domNode);

const store = configureStore({reducer: {saved:savedSlice}});

root.render(
<Provider store={store}>
        <App/>
    </Provider>);
