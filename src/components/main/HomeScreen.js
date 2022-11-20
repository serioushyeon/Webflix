import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import major from './Data';
import './style/HomeScreen.css';

const HomeScreen = () => {
    const [bannerLecture, setBannerLectrue] = useState(major[0]);
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scollListener = () => {
            if (window.screenY > 10) setHeader(true);
            else setHeader(false);
        }
        window.addEventListener('scroll', scollListener);

        return () => {
            window.removeEventListener('scroll', scollListener)
        }
    }, []);

    useEffect(() => {
        let choosen = Math.floor(Math.random() * 12);
        setBannerLectrue(major[choosen]);
    }, []);

    return (
        <div className='homeScreen'>
            <Nav black={header} />
            <Banner item={bannerLecture} />
            <section className='lists'>
                <Lecture title={"전공 강의"} items={major} />
            </section>
        </div>
    )
};

export default HomeScreen;