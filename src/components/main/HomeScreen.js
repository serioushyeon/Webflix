import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import './style/HomeScreen.css';

const HomeScreen = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scollListener = () => {
            if(window.screenY > 10) setHeader(true);
            else setHeader(false);
        }
        window.addEventListener('scroll', scollListener);

        return () => {
            window.removeEventListener('scroll', scollListener)
        }
    }, []);

    return (
        <div className='homeScreen'>
            <Nav black={header}/>
            <Banner />
            <Lecture/>
        </div>
    )
};

export default HomeScreen;