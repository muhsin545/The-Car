import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import {  NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import authenticationFirebase from './firebase.init';
import logo from '../../images/logo1.jpg'
authenticationFirebase()

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { signInWithGoogle, user, error,  isLoading, loginUser } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const GoogleLogin = () => {
        signInWithGoogle(location,history)
        
    };

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
    }
    const handleOnsubmit = (e) => {
        loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault();
    }
    return (
        <>
            <div className='my-5 text-center mx-auto '>

                <div className='row container mx-auto'>
                    <div className='col-md-7 g-3 bg-light p-5 mb-5'>
                        
                        <h3 className='text-danger fs-3 fw-bold'>Please Login</h3>
                        <form onSubmit={handleOnsubmit}>
                            <input type="email" name='email' onChange={handleOnChange} class='my-2 w-75' placeholder='Your Email' />
                            <br />
                            <input type="password" name='password' onChange={handleOnChange} class=' w-75' placeholder='Your Password' />
                            <input type="Submit" class='btn w-75 fs-4 fw-bold btn-outline-primary px-3' Value='Submit' />

                        </form>
                        {
                            isLoading && <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            user?.email && <div class="alert alert-success" role="alert">
                                Successfully Logged in User!!
                            </div>
                        }
                        {
                            error && <div class="alert alert-danger" role="alert">
                                {error}
                            </div>
                        }
                        <div>
                            <NavLink style={{ textDecoration: 'none' }} to='/registar'>
                                <p>New User?? Please Registar</p>
                            </NavLink>
                        </div>
                        <button className='btn w-75 fs-4 fw-bold btn-outline-primary px-3' onClick={GoogleLogin}>  Continue with Google </button>

                    </div>
                    <div className='col-md-5 p-3'>
                        <img src={logo} className='img-fluid' alt="" />
                    </div>
                </div>




            </div>


        </>
    );
};

export default Login;













