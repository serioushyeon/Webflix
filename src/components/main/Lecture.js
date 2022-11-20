import React, { useEffect, useState } from 'react';
import './style/Lecture.css';

const Lecture = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results?.length * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    };
    return (
        <div className="LectureRow">
            <h2>{title}</h2>
            <div className="LectureRow--left" onClick={handleLeftArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-left.png"/>
            </div>
            <div className="LectureRow--right" onClick={handleRightArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-right.png"/>
            </div>

            <div className="LectureRow--listarea">
                <div className="LectureRow--list" style={{
               marginLeft: scrollX,
           }}>
                    {items.length > 0 && items.map((item, key)=>(
                        <div key={key} className="Lecture--item">
                            <img src={`${item.img}`}/>
                        </div>
                    )) }
                </div>
            </div>
        </div>

    );
};

export default Lecture;
