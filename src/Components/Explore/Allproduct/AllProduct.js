import React, { useState } from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
const Explore = ({ singlePackage }) => {

    //  console.log(singlePackage)

    const { user } = useAuth();
    const history = useHistory();
    const seeDetails = (id) => {
        history.push(`/products/${id}`)
    }

    return (
        <>
            <div className="col-md-4 border rounded-3 my-3 p-3 package">
                <div className="p-0">
                    <img className='img-fluid' src={singlePackage.img} alt="" />
                </div>
                <div className="p-3 text-start py-2">
                    <div className="d-flex justify-content-around align-items-center">
                        <h5 className='text-primary'>{singlePackage.productName}</h5><b className='bg-danger text-light px-3 py-2 rounded-pill'><i>PRICE : </i>{singlePackage.price}</b>

                    </div>
                    <p>{singlePackage.description?.slice(0, 150)}</p>
                    <div className="d-flex justify-content-around align-items-center">
                    <button
                            onClick={() => { seeDetails(singlePackage._id) }} className="btn btn-danger rounded-pill">PURCHASE NOW</button>
                        <Rating
                            initialRating={4.5}
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star  text-warning"
                            readonly
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;

