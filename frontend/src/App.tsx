import './App.css';
import React from "react";
import {HashRouter} from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Header from "./Components/Header";

export default function App() {
    return (
        <HashRouter>
            <div style={{backgroundImage: `url("../background.jpg")`}}>
                <header className="d-flex justify-content-center p-4">
                    <h1 className="fw-bold">Dog-Adoption-App</h1>
                </header>
                <main className="text-center">
                    <Home/>
                    <Header/>
                    <AllRoutes/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </HashRouter>
    );
}
