import React from 'react';
import StatusBar from './StatusBar';
import Banner from './Banner';
import Lecture from './Lecture';

const HomeScreen = () => {

    return (
        <div className='homeScreen'>
            <StatusBar />
            <Banner />
            <Lecture title='Trending Now'/>
        </div>
    )
};

export default HomeScreen;