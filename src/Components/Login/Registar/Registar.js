import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Registar = () => {
    const [loginData, setLoginData] = useState({})


    const {user, handleGoogleLogin, userRegistration,error, isLoading} = useAuth();


    const location = useLocation();
    const history = useHistory();
    // console.log('came', location?.state?.from);


    
   
   
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    const handleOnsubmit = (e) => {
        userRegistration(loginData?.email, loginData?.password, loginData.name,history)
        e.preventDefault();
    }
    return (
        <>
            <div className='my-5 text-center mx-auto '>

                <div className='row container'>
                    <div className='col-md-5 g-3 '>
                        <img src="https://www.heromotocorp.com/en-bd/images/hero-logo.png" className='img-fluid' alt="" />
                        <h3 className='text-danger  fs-3 fw-bold'>Registration</h3>
                        {!isLoading &&
                            <form onSubmit={handleOnsubmit}>
                            <input type="text" name='name' onChange={handleOnChange} class='my-2 w-75' placeholder='Your Name' />
                            <br />
                                <input type="email" name='email' onChange={handleOnChange} class='my-2 w-75' placeholder='Your Email' />
                                <br />
                               
                                <input type="password" name='password' onChange={handleOnChange} class=' w-75' placeholder='Your Password' />
                                <input type="Submit" class='btn w-75 fs-4 fw-bold btn-outline-primary px-3' Value='Submit' />

                            </form>
                        }
                        {
                            isLoading && <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }
                        {
                            user?.email && <div class="alert alert-success" role="alert">
                               Successfully Created User!!
                            </div>
                        }
                        {
                            error && <div class="alert alert-danger" role="alert">
                                {error}
                            </div>
                        }
                        <div>
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                <p>Already Registered?? Please Login</p>
                                
                            </NavLink>
                        </div>
                       
                     

                    </div>
                    <div className='col-md-5'>

                    </div>
                </div>




            </div>
        </>
    );
};

export default Registar;