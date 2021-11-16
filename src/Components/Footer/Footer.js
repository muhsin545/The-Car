import React from 'react';
import { Fade } from 'react-reveal';
import logo from './../../images/logo1.jpg'
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-light mt-5 pt-5'>
            <div className="row container mx-auto">
                <Fade left>
                    <div className="col-md-3 my-3 pt-5">
                        <h6 className="text-danger CustomBorder">ABOUT HERO-HONDA</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit molestiae quam cupiditate culpa architecto, deserunt ducimus voluptates commodi nesciunt</p>
                        {/* here i will use icon instead of title like facebook instagram */}
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>twitter</span>
                    </div>
                </Fade>

                <Fade top>
                    <div className="col-md-3 my-3 pt-5">
                        <h6 className='CustomBorder text-danger'>CONTACT INFORMATION</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Contact: +0083834873</p>
                        <p>Email: herohonda@gmail.com</p>
                        <p>Location: 3146 Koontz, California</p>
                    </div>
                </Fade>
                <div className="col-md-3 pt-5">
                    <Fade right>
                        <img src={logo} className='img-fluid w-50 rounded-circle' alt="" />
                   </Fade>
                    <Fade bottom>
                        <div className='CustomBorder'>
                            <p>Privacy Policy</p>
                            <p>FAQ</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </Fade>
                </div>
                <Fade right>
                    <div className="col-md-3 my-3 pt-5  ">
                        <h6 className='CustomBorder text-danger'>SUBSCRIBE US
                        </h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <input type="email" class='p-3 text-danger border border-danger bg-light' name="Email" id="" placeholder='Your Email' />
                        <input type="submit" class="btn btn-outline-danger my-2 px-5" value="SUBSCRIBE NOW" />
                    </div>
               </Fade>
                <span className='mx-auto text-danger text-center mb-3'>
                    <p>&copy; <small> All-Right reserved By Muhibullah Muhsin</small></p>
                </span>
            </div>

        </div>
    );
};

export default Footer;