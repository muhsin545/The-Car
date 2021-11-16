import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    const email = `${user?.email}`;
    // console.log(user.email)
    useEffect(() => {
        fetch(`https://quiet-sands-27279.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    
    // console.log(orders);
    
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
                        window.location.reload() || alert('Successfully deleted')
                    }
                })
            // console.log(id);
        }
    }
    return (
        <div class=" text-center mx-auto my-3">

            <div>
                <h1>Your orders are available: {orders.length}</h1>
            </div>
            {
                orders.map((order, index) => < div className="container mx-auto text-center" >
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">index Number</th>
                                <th scope="col">Product</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{order.productName}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td><button class="btn btn-primary" onClick={() => handleDeleteOrder(order._id)}>Delete </button></td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                )}

        </div >
    );
};

export default MyOrders;


/*


*/