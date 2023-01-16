import React from "react";
import "../static/css/style.css" 
import img1 from "../static/img/carousel-1.jpg"
import img2 from "../static/img/carousel-2.jpg"

export function Inicio(){
    return(
        <div class="container-fluid p-0">
            <div id="header-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src={img1} alt="Image" /> 
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth:"900px"}}>
                                <h3 class="text-white mb-3 d-none d-sm-block">Best Supermarket Services</h3>
                                <h1 class="display-3 text-white mb-3">Healthy and fresh products</h1>
                                <h5 class="text-white mb-3 d-none d-sm-block">We will wait for you</h5>
                                <a href="" class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src={img2} alt="Image" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{maxWidth:"900px"}}>
                                <h3 class="text-white mb-3 d-none d-sm-block">Best Supermarket Services</h3>
                                <h1 class="display-3 text-white mb-3">Healthy and fresh products</h1>
                                <h5 class="text-white mb-3 d-none d-sm-block">We will wait for you</h5>
                                <a href="" class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">Book Now</a>                               
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-primary rounded" style={{maxWidth:"45px", height:"45px"}}>
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
                </a>
                <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div class="btn btn-primary rounded" style={{maxWidth:"45px", height:"45px"}}>
                        <span class="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
    )
}