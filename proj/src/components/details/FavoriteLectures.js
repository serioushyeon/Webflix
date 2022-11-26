import React, { useEffect, useState } from 'react';
import "../style/FavoriteLectures.css"
import Data from '../main/Data'
import Nav from "../main/Nav"

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
                if (count%6 == 0) {
                    result.push(<tr></tr>);
                }
                
            }
                
        }
        return result;
      };

    return (
        <>
            <Nav />
            <div className='myFavoriteLecturePage'>
                <div className="myFavoriteLecture">내가 찜한 강의</div>
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
