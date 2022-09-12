import "./Home.css";

export default function Home() {

    return (
        <>
            <header>

                <nav className="orange-500 p-4">
                    <ul className="navbar-nav">
                        <ul className="nav nav-pills mb-1 red">
                            <li className="nav-item blubb">
                                <a className="nav-link" aria-current="page"
                                   href="http://localhost:3000/#/home">Home</a>
                            </li>
                            <li className="nav-item blubb ">
                                <a className="nav-link" href="http://localhost:3000/#/animals">Adopt a dog</a>
                            </li>
                            <li className="nav-item blubb">
                                <a className="nav-link " href="http://localhost:3000/#/animals/add">Add a
                                    dog</a>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </header>
        </>
    )
}
