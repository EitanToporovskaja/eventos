import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/home">Home</Link>
        </nav>
    )
}

export default Navbar