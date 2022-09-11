import './App.css';
import React from "react";
import {HashRouter} from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <HashRouter>
            <div style={{backgroundImage: `url("../background.jpg")`}}>
                <header>
                    <h1>Dogs</h1>
                </header>
                <main className="text-center">
                    <AllRoutes/>
                </main>
            </div>
        </HashRouter>
    );
}
