import React from "react";
import "../static/css/style.css" 

export function Footer(){
    return(
        <div>    
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />    
        <div class="container-fluid bg-dark text-white py-0 px-sm-3 px-md-5" >            
            <div class="row" style={{paddingTop:"1%"}}>  
                <div class="col-lg-4 col-md-12 mb-5">
                    <h1 class="mb-3 display-5 text-capitalize text-white"><span class="text-primary">Sale</span>Food</h1>
                    <p class="m-0">Ipsum amet sed vero et lorem stet eos ut, labore sed sed stet sea est ipsum ut. Volup amet ea sanct ipsum, dolore vero lorem no duo eirmod. Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea lorem sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea</p>
                </div>             
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <h5 class="text-primary mb-4">Get In Touch</h5>
                            <p><i class="fa fa-map-marker-alt mr-2"></i>Bogotá Colombia</p>
                            <p><i class="fa fa-phone-alt mr-2"></i>+57 3147379809</p>
                            <p><i class="fa fa-envelope mr-2"></i>jhonier902@hotmail.com</p>
                            <div class="d-flex justify-content-center mt-2">
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:"36px", height:"36px"}} href="https://twitter.com/jonier93"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:"36px", height:"36px"}} href="https://www.facebook.com/jonierporras/"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:"36px", height:"36px"}} href="https://www.linkedin.com/in/jonier-porras-duque-75243735"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:"36px", height:"36px"}} href="https://www.instagram.com/jonierporras/"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h5 class="text-primary mb-4">Popular Links</h5>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Services</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Team</a>
                                <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h5 class="text-primary mb-4">Newsletter</h5>
                            <form action="">
                                <div class="form-group">
                                    <input type="text" class="form-control border-0" placeholder="Your Name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control border-0" placeholder="Your Email" required="required" />
                                </div>
                                <div>
                                    <button class="btn btn-lg btn-primary btn-block border-0" type="submit">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid text-white py-1 px-sm-3 px-md-5" style={{background:"#111111"}}>
            <div class="row">
                <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">
                        &copy; <a class="text-white font-weight-bold" href="#">SaleFood</a>. All Rights Reserved. Designed by
                        <a class="text-white font-weight-bold" href="https://htmlcodex.com"> Jonier Porras</a>
                    </p>
                </div>
                <div class="col-md-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}