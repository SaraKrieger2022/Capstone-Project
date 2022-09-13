import "./Header.css"

export default function Header() {

    return (
        <>
            <body>
            <nav>
                <ul className="navbar-nav">
                    <ul className="nav nav-pills">
                        <li className="nav-item box">
                            <a className="nav-link" aria-current="page" href="http://localhost:3000/#/home">Home</a>
                        </li>
                        <li className="nav-item box">
                            <a className="nav-link" href="http://localhost:3000/#/animals">Adopt a dog</a>
                        </li>
                        <li className="nav-item box">
                            <a className="nav-link " href="http://localhost:3000/#/animals/add">Add a dog</a>
                        </li>
                    </ul>
                </ul>
            </nav>
            </body>
        </>

    )
}