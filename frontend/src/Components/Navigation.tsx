import "./Navigation.css";

export default function Navigation() {

    return (


        <nav className="navbar-nav">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page"
                       href="http://localhost:3000/#/home">Home</a>
                </li>
                <li className="nav-item box">
                    <a className="nav-link active" href="http://localhost:3000/#/animals">Adopt a dog</a>
                </li>
                <li className="nav-item box">
                    <a className="nav-link active" href="http://localhost:3000/#/animals/add">Add a
                        dog</a>
                </li>
            </ul>
        </nav>

    )
}