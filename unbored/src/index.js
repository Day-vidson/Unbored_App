import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App"
import { configureStore } from "@reduxjs/toolkit"
import "./index.css"
import { unboredReducer } from "./unboredRecuder";

const domNode = document.getElementById("container");
const root = createRoot(domNode);

var store = configureStore(unboredReducer);

root.render(
<Provider store={store}>
        <App/>
    </Provider>);
