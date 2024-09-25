import { Link } from "react-router-dom" ;


const Login = () => {
    return(
        <>
            <div>Hola, soy un login</div>
            <Link to="/register">¿No tenés cuenta? Registrate</Link>

            <button><Link to="/home">Iniciá sesión</Link></button>
        </>
    )
}

export default Login