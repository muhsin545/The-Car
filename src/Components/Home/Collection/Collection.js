import React from 'react';
import './Collection.css'
const Collection = () => {
    const style = {
        color: '#FEB900'
    }
    return (
        <>
            <div className="mt-5 ms-5 CustomBorder">
                <h1 style={style} className='fw-bold mb-3'>__________</h1>
                <p style={style}>POPULAR Collection</p>

            </div>
            <div className="row container mx-auto my-5">
                <div className="col-md-6 ">
                    <h1 className='fw-bold fs-1 text-danger'>TOP  Collection</h1>
                </div>
                <div className="col-md-6">

                    <p className="text-muted">
                        Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. 
                    </p>
                </div>

            </div>
            <div className="row container mx-auto">
                <div className="row col-md-6">
                    <div className="col-md-12 img Border p-0">
                        <button className='btn bg-primary px-5 button'>
                            Tesla
                        </button>
                        <img src="https://images.unsplash.com/photo-1561580125-028ee3bd62eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className='img-fluid imgDestination' alt="" />
                    </div>
                    <div className="row col-md-12 my-3 g-3">

                        <div className="col-md-6 img Border p-0">
                            <button className='btn bg-primary px-5 button'>
                                FTSC
                            </button>
                            <img src="https://images.unsplash.com/photo-1584902333755-88e3921c711f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwY29sbGVjdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 img Border p-0">
                            <button className='btn bg-primary px-5 button'>
                                ASDWC
                            </button>
                            <img src="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className='img-fluid' alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="row">

                        <div className="col-md-6 img Border p-0">
                            <button className='btn bg-primary px-5 button'>
                                VADSFA
                            </button>
                            <img src="https://images.unsplash.com/photo-1613234260258-5ae6efbdbdd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwY29sbGVjdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 img Border p-0">
                            <button className='btn bg-primary px-5 button'>
                                FSEAC
                            </button>
                            <img src="https://images.unsplash.com/photo-1613234259978-98229fb76d9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwY29sbGVjdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className='img-fluid ' alt="" />
                        </div>
                    </div>
                    <div className="row my-3 ms-1">

                        <div className="img Border p-0">
                            <img src="https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" className='img-fluid ' alt="" />
                            <button className='btn bg-primary px-5 button'>
                                VERTA
                            </button>
                        </div>
                    </div>

                </div>

                <button className='btn btn-outline-primary px-3 w-50 mx-auto my-3'>
                    MORE Collection</button>

            </div>
        </>
    );
};

export default Collection;