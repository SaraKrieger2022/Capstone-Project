import './App.css';
import React from "react";
import {HashRouter} from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";

export default function App() {
    return (
        <HashRouter>
            <header>
                <h1>Dogs</h1>
            </header>
            <main>
                <AllRoutes/>
            </main>
        </HashRouter>
    );
}
