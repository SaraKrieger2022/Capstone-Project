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
                           href="">Home</a>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item box">
                        <a className="nav-link active" href="">Adopt a dog</a>
                        <NavLink to={"/animals"}>Adopt a dog</NavLink>
                    </li>
                    <li className="nav-item box">
                        <a className="nav-link active" href="">Add a
                            dog</a>
                        <NavLink to={"/animals/add"}>Add a dog</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
