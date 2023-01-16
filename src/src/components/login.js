import React, {useState} from 'react'
import '../static/css/styleLogin.css'
import { Admin } from './admin'
import { Cliente } from './cliente'
import imgLogin from '../static/img/login.png'

let url = "http://localhost:5000"

export function Login (){ 
    let datosLogin = <div class="container-fluid">                
                        <div class="row">
                            <div class="col-3"> </div>
                            <div class="col-6" id="colPers"> 
                                <img id="imagenLogin" src={imgLogin}></img> 
                                <div class="row">
                                    <div class="col-5">
                                        <label> Email </label>
                                    </div>
                                    <div class="col-7">
                                        <input type="email" id="emailCred" placeholder='Ingrese su correo' ></input>
                                    </div>                            
                                </div> 
                                <div class="row"> &nbsp; </div>
                                <div class="row">
                                    <div class="col-5">
                                        <label> Contraseña </label>
                                    </div>
                                    <div class="col-7">
                                        <input type="password" id='passwordCred' placeholder='Ingrese su contraseña'></input>
                                    </div>                            
                                </div>                                
                                <input type="radio" id="cliente" value="Cliente" name="grupoRadio" defaultChecked></input>
                                <label for="Cliente"> Cliente </label> &nbsp; &nbsp;
                                <input type="radio" id="admin" value="Admin" name="grupoRadio"></input>
                                <label for="Admin"> Admin </label>                                
                                <div><button type='button' id="btnLogear" onClick={autenticar} class="btn btn-primary btn-lg"> Logear </button></div>
                            </div>
                            <div class="col-6"> </div>
                        </div>
                    </div>
                     
    let [estado, setEstado] = useState(datosLogin)
    
    function autenticar(){
        let cliente = document.getElementById('cliente').checked
        let datos = {
            email: document.getElementById('emailCred').value,
            password: document.getElementById('passwordCred').value,
            userType:cliente
        }  
        fetch('/autenticacion', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        })
        .then(res => res.json())
        .then(data => { 
            if (data.id != ""){
                if (cliente == true){
                    setEstado(estado = <Cliente mess={data} />)
                }
                else {
                    setEstado(estado = <Admin/> )
                }                
            }
            else (
                alert("Usuario y/o contraseña incorrecta")
            )        
        })
    }
    return(
        <div className='compLogin'>
            {estado}         
        </div>        
    )
}
