import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-sands-27279.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <>
            <div className='my-5 CustomBorder ms-2'>
                <h1 className='text-start text-danger fs-1 fw-bold'>----HOT PRODUCTS---</h1>

            </div>
            <div className="mx-auto text-center">
                {
                    products.length === 0 ? <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        : <div>
                            <div className='row container mx-auto text-center justify-content-center'>
                                {
                                    products.map(singlePackage => <ManageProduct
                                        key={singlePackage._id} singlePackage={singlePackage}></ManageProduct>)
                                }

                            </div>
                        </div>
                }
            </div>

        </>
    );
};

export default ManageProducts;