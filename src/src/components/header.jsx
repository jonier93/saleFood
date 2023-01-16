import React from "react";
import "../static/css/style.css" 

export function Header(){
    return(
        <div class="container-fluid">        
            <div class="row py-2 px-lg-5">
                <div class="col-lg-4">
                    <a href="" class="navbar-brand d-none d-lg-block">
                        <h1 class="m-0 display-5 text-capitalize"><span class="text-primary">Sale</span>Food</h1>
                    </a>
                </div>
                <div class="col-lg-8 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <div class="d-inline-flex flex-column text-center pr-3 border-right">
                            <h6>Opening Hours</h6>
                            <p class="m-0">8.00AM - 9.00PM</p>
                        </div>
                        <div class="d-inline-flex flex-column text-center px-3 border-right">
                            <h6>Email</h6>
                            <p class="m-0">jhonier902@example.com</p>
                        </div>
                        <div class="d-inline-flex flex-column text-center pl-3">
                            <h6>Phone Number</h6>
                            <p class="m-0">+57 3147379809</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}