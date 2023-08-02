import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
import "./index.css"
import rootReducer from "./rootReducer";

const domNode = document.getElementById("container");
const root = createRoot(domNode);

const store = configureStore({
    reducer: rootReducer
});

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
