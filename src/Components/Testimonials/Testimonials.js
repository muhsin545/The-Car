import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import logo from './../../images/logo1.jpg';
const Testimonials = () => {
    const { user } = useAuth();
    // console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://quiet-sands-27279.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("review inserted successfully")
                }
                reset()
            })
      
        // console.log(data);
    };
    return (
        <div className="row container mx-auto text-center my-5 p-5 align-items-center">
            <div className='text-center text-danger p-5 my-5 col-md-4'>
                <img src={logo} className='img-fluid' width='300px' alt="" />
            </div>

            <div className=' col-md-8 bg-light p-3'>
                <b className='text-warning'>Leave A review</b>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input class="fs-5 text-danger" {...register("Reviewer", { required: true })} defaultValue={user.displayName}  /> <br />
                    <input class="fs-5 text-danger" {...register("description", { required: true })} placeholder='Leave Your Review ' /> <br />
                    <input class="fs-5 text-danger" {...register("img")} defaultValue={user?.photoURL} /> <br />
                    <input class="fs-5 text-danger" type="number" {...register("Rating", { min: 1, max: 5 }, { required: true } )} placeholder='Rate Our service between 1-5' /> <br />
                    <input type="submit" class="px-5 py-3 border fs-5 fw-bolder btn-warning" value="SUBMIT" />
                </form>
            </div>
            
        </div>
    );
};

export default Testimonials;