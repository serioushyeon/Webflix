import React, { useEffect, useState } from 'react';
import logo from './Img/logo.png'

const StatusBar = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) handleShow(true);
        else handleShow(false);
    }

    useEffect(() => { // 화면 scroll 길이가 늘어나면 상태바 보임
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className='statusBar'>
            <img
            src={logo}
            alt='webflix_logo'
            />
        </div>
    );
};

export default StatusBar;
