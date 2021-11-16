import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-sands-27279.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
// console.log(products.slice(0,6));
    return (
        <>
            
                <div className=' CustomBorder'> 
                    <h1 className=' text-danger fs-1 fw-bold'>----HOT PRODUCTS---</h1>

                </div>
                
                    
            
            <div className="mx-auto text-center">
                {
                    products.length === 0 ? <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        : <div>
                            <div className='row container mx-auto text-center justify-content-center'>
                                {
                                    products.slice(0, 6).map(singlePackage => <Product
                                        key={singlePackage._id} singlePackage={singlePackage}></Product>)
                                }

                            </div>
                        </div>
                }
                <Link to='/explore'>
                    <input type="button" class="px-4 py-3 my-2 fs-5 fw-bold border rounded border-dark btn btn-outline-danger" value=" MORE PRODUCTS" /></Link>

            </div>

        </>
    );
};

export default Products;