import React, {useState} from 'react'
import { Carrito } from './carrito'
import { Productos } from './productos'
import imgCliente from "../static/img/cliente.gif"
import "../static/css/styleCliente.css"

let url = "http://localhost:5000"
export function Cliente (propiedades) {    
    let init = <img id="imgCliente" src={imgCliente}></img>
    let [productos, setProductos] = useState(init)    
    
    let verProductos = (event) =>{
        event.preventDefault() 
        let idUser = propiedades.mess._id
        fetch("/productos")
        .then(resp => resp.json())
        .then(datos => {
            setProductos(productos=<Productos usuario={idUser} productos={datos} />) 
        })               
    }

    let verCarrito = (event) =>{  
        event.preventDefault()      
        let datoId = {id:propiedades.mess._id}
        fetch("/verCarrito", {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datoId)
        })
        .then(resp => resp.json())
        .then(datos => {
                console.log(datos)
            if (datos._id !=""){
                console.log(datos)
                setProductos(productos=<Carrito usuario={datoId} carrito={datos}/>) 
            }
            else {
                alert("No hay productos agregados al carrito")
            }   
        })         
    }

    let cerrarSesion = () => {
        window.location.href="/home"
    }
    
    return(
        <div className='compCliente'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="listaProductos" onClick={verProductos}> Lista productos </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="carrito" onClick={verCarrito}> Carrito </a>
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