import "./Navigation.css";
import {NavLink} from "react-router-dom";

export default function Navigation() {

    return (
        <>
            <section>
                <img src="/pictures/anna-dudkova-urs_y9NwFcc-unsplash.jpg"
                     className="img-fluid max-width: 100% height: auto" alt="..."/>
            </section>

            <nav className="navbar-nav mt-4 mb-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page"
                           href={"http://localhost:3000/#/home"}>Home</a>
                    </li>
                    <li className="nav-item box">
                        <a className="nav-link active" href="http://localhost:3000/#/animals">Adopt a dog</a>
                        <NavLink to={"/home"}></NavLink>
                    </li>
                    <li className="nav-item box">
                        <a className="nav-link active" href="http://localhost:3000/#/animals/add">Add a
                            dog</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}