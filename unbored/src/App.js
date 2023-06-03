import { useState } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import Header from "./Header.js";
import Content from "./Content.js";
import NavBar from "./NavBar.js";
import "./index.css"

function App() {
    return(
        <HashRouter>
            <div>
                <section className="App">
                    <Header></Header>
                    <Content></Content>
                    <NavBar className="NavBar"></NavBar>
                </section>
            </div>
        </HashRouter>
    )
}

export default App;