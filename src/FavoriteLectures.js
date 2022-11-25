import React, { useEffect, useState } from 'react';
import "../style/style.css"
import Data from './main/Data'
import Nav from './main/Nav';
import Banner from './main/Banner';
import Lecture from './main/Lecture';

const FavoriteLectures = () => {
    const [FavoriteLectureList, setFavoriteLectureList] = useState(Data);
    useEffect(() => {
        let list = Data.filter((lecture) => lecture.vote_average >= 50);
        setFavoriteLectureList(list);
    }, []);

    // 찜한 강의
    const favoriteLecture = () => {
        const result = [];
        const oneLine = [];
        var count = 0;
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].favorite) {
                count++
                result.push(<td><img src={Data[i].img} /></td>);
                if (count%5 == 0) {
                    result.push(<tr></tr>);
                }
                
            }
                
        }
        return result;
      };

    return (
        <>
            <div className="top">
                <img src={"/img/webflix-logo.png"} id="logo" width="15%" height="15%" />

                <div className="search-window">
                    <span id="search-icon"><i className="fas fa-search"></i></span>
                    <input type="text" id="search" placeholder="검색" />
                    <span id="delete-icon"><i className="fas fa-times-circle"></i></span>
                </div>
                
                <div className="profile">
                    <span id="profile-icon-blue"><img src={"img/profile-blue.png"} width="55px" height="55px" /></span>
                </div>
            </div>

            <div className="myFavoriteLecture">내가 찜한 강의</div>
            <div className="search-results">
                <div className="img-table">
                    <table className="table">
                        <div>{favoriteLecture()}</div>
                    </table>
                </div>
            </div>
        </>
    );
}

export default FavoriteLectures;
