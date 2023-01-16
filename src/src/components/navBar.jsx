import React from "react";
import "../static/css/style.css" 
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Inicio } from "./inicio";
import { Login } from "./login";
import { Register } from "./register";
import { Contact} from "./contact";
import { Cliente } from "./cliente";
import { Carrito } from "./carrito";
import { Productos } from "./productos";

export function NavBar(){
    return(
        <div class="container-fluid p-0" >   
        <BrowserRouter>        
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5" >
            <a href="" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Sale</span>Food</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <Link to="/home" style={{textDecoration:"none"}}> <a class="nav-item nav-link" style={{fontSize:"25px"}}> Home </a> </Link>                    
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" style={{fontSize:"25px"}}> Login </a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <Link to="/login" style={{textDecoration:"none"}} > <a  class="dropdown-item" style={{fontSize:"20px"}}> User </a> </Link> 
                            <Link to="/login" style={{textDecoration:"none"}} > <a class="dropdown-item" style={{fontSize:"20px"}}> Admin </a> </Link>
                        </div>
                    </div>
                    <Link to="/register" style={{textDecoration:"none"}} > <a class="nav-item nav-link" style={{fontSize:"25px"}}> Register </a> </Link>
                    <Link to="/contactar" style={{textDecoration:"none"}} > <a class="nav-item nav-link" style={{fontSize:"25px"}}> Contact </a> </Link>
                </div>
            </div>
        </nav>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/home" element={<Inicio/>}></Route>
                <Route path="/login" element={<Login/>}> </Route>
                <Route path="/register" element={<Register/>}> </Route>
                <Route path="/contactar" element={<Contact />}></Route>
                <Route path="/cliente" element={<Cliente />}></Route>
                <Route path="/carrito" element={<Carrito />}></Route>
                <Route path="/listaProductos" element={<Productos />}></Route>   
            </Routes>
        </BrowserRouter>  
    </div>
    )
}