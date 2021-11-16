import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = ({ email }) => {
        const user = { email }

        fetch('https://quiet-sands-27279.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                   alert('Modified')
                }
            })

    }





    return (
        <div className="from-section-2 text-center">
            <h3 className="fw-bold text-center py-5">Make a Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input
                    autoFocus
                    type="email"
                    placeholder="Enter a Email"
                    {...register("email", { required: true })}
                />


                <button type="submit" className="btn  btn-outline-dark py-2 mb-1">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;