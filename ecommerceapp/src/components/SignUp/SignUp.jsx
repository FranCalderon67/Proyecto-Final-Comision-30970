import React from "react";
import './signUp.css'
import axios from "axios";
function SignUp() {

    const getPrefijos = async () => {
        try {
            const prefijos = await axios.get('http://localhost:8080/prefijos')
            prefijos.data.map((pais) => {

                let option = document.createElement("option")
                option.innerHTML = `${pais.name}`
                document.getElementById("paisRegistro").appendChild(option)

            })
        } catch (error) {
            console.log('Error=>', error)
        }


    }
    getPrefijos()
    return (
        <>
            <div className="container mt-3">
                <div>
                    <br />
                    <div className="signup-form-background">
                        <form className="signup-form-flex-inputs" action="http://localhost:8080/signup" method="post" autoComplete="off" encType="multipart/form-data">
                            <h1>REGISTRATE</h1>

                            <h3>Datos Personales</h3>

                            <input className="inputUsuario" id="nombreRegistro" type="text" name="nombre" placeholder="Nombre" required />
                            <input className="inputUsuario" id="apellidoRegistro" type="text" name="apellido" placeholder="Apellido" required />
                            <input className="inputUsuario" id="edadRegistro" type="number" name="edad" placeholder="Edad" required />


                            <h3>Imagen de Perfil</h3>

                            <input className="inputUsuario" id="imagenRegistro" type="file" placeholder="imagenPerfil" name="avatar" />


                            <h3>Domicilio</h3>

                            <input className="inputUsuario" id="calleRegistro" type="text" name="direccion" placeholder="Direccion" required />
                            <input className="inputUsuario" id="numeroRegistro" type="number" name="numeracion" placeholder="Numeracion" />
                            <input className="inputUsuario" id="localidadRegistro" type="text" name="ciudad" placeholder="Ciudad" required />
                            <input className="inputUsuario" id="provinciaRegistro" type="text" name="provincia" placeholder="Provincia" required />

                            <label htmlFor="pais">Pais</label>
                            <select className="inputUsuario" id="paisRegistro" name="pais">
                                <option id="paises"></option>
                            </select>




                            <h3>Telefono</h3>

                            <input className="inputUsuario" id="prefijoRegistro" placeholder="Prefijo" required />
                            <input className="inputUsuario" id="telefonoRegistro" type="tel" name="telefono" placeholder="Telefono" required />


                            <h3>Usuario</h3>

                            <input className="inputUsuario" id="emailRegistro" type="email" name="email" placeholder="Email" required />
                            <input className="inputUsuario" id="passwordRegistro" type="password" name="password" placeholder="Password" required />
                            <span>
                                <button type="submit" className="btn-signup">ENVIAR</button>

                                <a href="/"> <button className="btn-regresar">REGRESAR</button></a>
                            </span>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp