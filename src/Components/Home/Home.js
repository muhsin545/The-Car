import React from 'react';
import Review from '../Review/Review';
import Subscibe from '../Subscibe/Subscibe';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Collection from './Collection/Collection';
import Products from './Products/Products';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
           <Products></Products>
            <Collection></Collection>
            <Blog></Blog>
            <Subscibe></Subscibe>
            <Review></Review>
        </div>
    );
};

export default Home;