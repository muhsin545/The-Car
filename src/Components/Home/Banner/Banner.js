import React from 'react';
import Fade from 'react-reveal/Fade';
import logo from './../../../images/bg.png';
import './Banner.css'
const Banner = () => {
    return (
        <>
            <div class="row container-fluid banner mb-5 pt-1 align-items-center mx-auto">
                <div class="col-md-6 text-danger  my-5 py-3">
                    <Fade right>
                        <h1 className='fs-1 fw-bold '>The Car </h1>
                        <h3 className='fs-2 fw-bold '>Where You Can Trust</h3>
                        <p>Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                        <button className='fs-5 fw-bolder btn btn-outline-danger '>Buy Now</button>
                    </Fade>
                </div>
                <div class="col-md-6  my-5 py-3">
                    <Fade left>
                        <img src={logo} className='img-fluid' alt="" />
                    </Fade>
                </div>
            </div>


        </>
    );
};

export default Banner;