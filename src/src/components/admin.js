import React, {useState} from 'react'
import imgAdministrador from "../static/img/administrador.gif"
import "../static/css/styleAdministrador.css"

export function Admin () {
    let init = <img id="imgAdministrador" src={imgAdministrador}></img>
    let [productos, setProductos] = useState(init)  
    let cerrarSesion = () => {
        window.location.href="/home"
    }

    return(
        <div className='compAdministrador'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"> Lista productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Modificar productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"> Lista ventas </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="home" onClick={cerrarSesion}> Cerrar Sesion </a>
                </li>
                </ul>
            </div>
            </nav>
            {productos}
        </div>
    )
}