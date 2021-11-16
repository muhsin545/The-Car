import React from 'react';
import Rating from 'react-rating';


const Explore = ({ singlePackage }) => {

    
const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to Delete this order?');
        if (proceed) {
            fetch(`https://quiet-sands-27279.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    window.location.reload() || alert('Successfully deleted')
                }
            })
        // console.log(id);
        }
    }
    return (
        <>
            <div className="col-md-4 border rounded-3 my-3 p-3 package">
                <div className="p-0">
                    <img className='img-fluid' src={singlePackage.img} alt="" />
                </div>
                <div className="p-3 text-start py-2 my-2">
                    <div className="d-flex justify-content-around align-items-center">
                        <h5 className='text-primary'>{singlePackage.productName}</h5><b className='bg-danger text-light px-3 py-2 rounded-pill'><i>PRICE : </i>{singlePackage.price}</b>

                    </div>
                   
                    <div className="d-flex justify-content-around align-items-center">
                        <button
                            onClick={() => { handleDeleteOrder(singlePackage._id) }} className="btn btn-danger rounded-pill">Delete Product</button>
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

