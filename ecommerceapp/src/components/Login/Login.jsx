import React from "react";
import { Link } from "react-router-dom";
import './login.css'
function Login() {

    return (
        <>

            <div className="container mt-3">
                <div className="login-form-background login-form-flex">
                    <h1>LOGIN</h1>
                    <form className="login-form-flex-inputs" action="http://localhost:8080/login" method="post" autoComplete="off">

                        <input className="inputUsuario" id="nombreIngreso" type="email" name="email" placeholder="Usuario" required />
                        <input className="inputUsuario" id="passwordIngreso" type="password" name="password" placeholder="Password" required />
                        <button className="btn btn-primary">LOGIN</button>

                        <p className="login-form-registrado">No estas registrado? <span><Link to="/signup">Registrate!</Link></span></p>
                    </form>
                </div>

            </div>




        </>

    )
}

export default Login