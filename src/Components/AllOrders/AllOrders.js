import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-sands-27279.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to Delete this order?');
        if (proceed) {
            fetch(`https://quiet-sands-27279.herokuapp.com/deleteOrders/${id}`, {
            method: 'DELETE',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert('Successfully deleted') ||window.location.reload()
                }
            })
        // console.log(id);
        }
    }
    const handleShifted = (id) => {
        fetch(`https://quiet-sands-27279.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Shifted successfully ') || window.location.reload();
                }
            })
    }
    return (
        <div className='my-5 mx-auto text-center container'>
            <h4>all orders are available : {allOrders.length}</h4>
            {
                allOrders.map((order, index) => < div className="table-responsive-sm container mx-auto text-center" >
                    <table class="table  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">index</th>
                                <th scope="col">Product</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{index}</th>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td><button class="btn btn-primary" onClick={() => handleShifted(order._id)}>Shift</button>
                                    <button class="btn btn-primary ms-1" onClick={() => handleDeleteOrder(order._id)}>Delete </button></td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                )}
        </div>
    );
};

export default AllOrders;