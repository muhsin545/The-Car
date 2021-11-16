import React from 'react';
import logo from './../../images/bg.png'
import './Subscibe.css'
import {Zoom,Fade} from 'react-reveal';

const Subscibe = () => {
    return (
        <>
            <div className="text-center mt-5 text-danger fw-bold ">
                <h5>----- To Get <h1>Victory Day  Special Offer</h1></h5>
             </div>
            <div className='container-fluid row mx-auto text-light Subscibe   mb-5'>
               
                
                    <Zoom left>
                        <div className='row col-md-5 align-items-center'>
                            <div className=" col-md-5">

                                <h1 className='fs-1 fw-bold'>Victory Day SPECIAL 25% OFF !!!
                                </h1>
                            </div>
                            <div class=" col-md-7">
                                <input type="Email" class="px-2 py-3 border btn btn-outline-light rounded-3 fs-5 fw-bold" value="Your Email" />
                                <input type="submit" class="px-4 py-3 fs-5 fw-bold border rounded-3 btn btn-outline-light m-1" value=" SIGN UP NOW" />

                            </div>
                        </div>
                    </Zoom>
             

                
                <Fade right>
                <div className='col-md-5 mx-auto py-5'>
                    <img src={logo} className='img-fluid ' width='500' height='550' alt="" />
                </div>
             </Fade>

               
            </div>
        </>
    );
};

export default Subscibe;