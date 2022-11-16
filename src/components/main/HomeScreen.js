import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import './style/HomeScreen.css';

const HomeScreen = () => {

    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Lecture title='Trending Now'/>
        </div>
    )
};

export default HomeScreen;