import React, { useEffect, useState } from 'react';
import '../style/Lecture.css';
import Modal from './Modal';
import ModalPortal from "./Portal";


const Lecture = ({ title, items, onPlusFavorite = f => f, onPlusMyList = f => f}) => {
    const [modalOn, setModalOn] = useState(false);
    const [currentLecture, setCurrnetLecture] = useState();
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results?.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    };

    const handleModal = () => {
        setModalOn(!modalOn);
      };
    return (
        <div className="lectureRow">
            <h2>{title}</h2>
            <div className="lectureRow--left" onClick={handleLeftArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-left.png" />
            </div>
            <div className="lectureRow--right" onClick={handleRightArrow}>
                <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/chevron-right.png" />
            </div>

            <div className="lectureRow--listarea">
                <div className="lectureRow--list" style={{
                    marginLeft: scrollX,
                }}>
                    {items.length > 0 && items.map((lecture, key) => (
                        <div key={key} className="lectureRow--item" onMouseEnter={() => setCurrnetLecture(lecture)} onClick={handleModal}>
                            <img src={`${lecture.img}`} />
                        </div>
                    ))}
                </div>
            </div>
            <ModalPortal>
                {modalOn && <Modal onClose={handleModal} lecture={currentLecture} onPlusFavorite={onPlusFavorite} onPlusMyList={onPlusMyList}/>}
            </ModalPortal>
        </div>

    );
};

export default Lecture;

