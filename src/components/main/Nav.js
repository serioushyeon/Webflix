import React, { useEffect, useState } from 'react';
import logo from './img/logo.png'
import './style/Nav.css'

const Nav = () => {
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
        <div className='Nav'>
            <div className='NavContents'>
                <img
                    src={logo}
                    alt='webflix_logo'
                />
                hello
            </div>
        </div>
    );
};

export default Nav;
