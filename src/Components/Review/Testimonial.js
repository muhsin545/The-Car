import React from 'react';
import Rating from 'react-rating';

const Testimonial = ({ testimonial }) => {
    // console.log(testimonial);
    return (
        <>
            <div className="col-md-3 border my-3 p-2">
                <img src={testimonial?.img} className='img-fluid  rounded-circle w-50' alt="" />
                <br />
              
                <h5 className="text-muted">
                    {testimonial?.Reviewer}
                </h5>  <Rating
                    initialRating={testimonial?.Rating}
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star  text-warning"
                    readonly
                /> <br />
                <small>{testimonial?.description.slice(0, 100)}</small>
            </div>
        </>
    );
};

export default Testimonial;