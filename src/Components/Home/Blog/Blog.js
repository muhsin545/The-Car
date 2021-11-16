import React from 'react';
import Slider from 'react-slick';
import './Blog.css'
const Blog = () => {
    
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    return (
        <>
            <div className='mt-5 mx-auto text-center w-75 pt-5 '>
                <b className='text-muted'>------------From Our Collection</b>
                <h1 className="fs-1 fw-bold text-danger">
                    OUR RECENT Blogs
                </h1>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae odio eaque totam quis sint iste eum exercitationem, reprehenderit numquam?
                </p>
            </div >
            <div className='container-fluid mx-auto text-center my-5'>
    
                <div className="row container mx-auto g-3 text-center blogDiv" >
                    <Slider {...settings}>
                        <div className="col-md-4 border  my-5 w-50  p-2 rounded-3  ">
                            <img src="https://images.unsplash.com/photo-1596894573290-80f98cee5267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdG9yYmlrZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="img-fluid rounded-3 "  style={{margin:'0 auto'}} alt="" />
                            <div className='my-3'>
                                <h5 className='ps-3'>Journeys are best measured in new friends</h5>
                                
                            </div>
                        </div>
                   
                  
                        <div className="col-md-4 border w-50  my-5 p-2 rounded-3 blogDiv">
                            <img src="https://images.unsplash.com/photo-1473147437169-91ac8cebc017?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdG9yYmlrZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="img-fluid rounded-3" style={{ margin: '0 auto' }}  alt="" />
                            <div className='my-3'>
                                <h5 className='ps-3'>Take only memories, leave only footprints</h5>
                                
                            </div>
                        </div>
                   
                   
                        <div className="col-md-4 border  w-50  p-2 my-5 rounded-3 blogDiv">
                            <img src="https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdG9yYmlrZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="img-fluid rounded-3" style={{ margin: '0 auto' }} alt="" />
                            <div className='my-3'>
                                <h5 className='ps-3'>Life is a beautiful journey not a destination</h5>
                                
                            </div>
                        </div>
                    </Slider>
                    </div>
                
            
            </div>
            
        </>
    );
};

export default Blog;