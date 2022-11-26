import React, { useEffect, useState } from 'react';
import "../style/MyList.css"
import Data from '../main/Data'

const MyList = () => {
    const [myLectures, setmyLectures] = useState(Data);
    useEffect(() => {
        let list = Data.filter((lecture) => lecture.myList === true);
        setmyLectures(list);
    }, []);

    // 찜한 강의
    const myLecture = () => {
        const result = [];
        const oneLine = [];
        var count = 0;
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].myList) {
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
            <div className='myListPage'>
                <div className="myLecture">내가 찜한 강의</div>
                <div className="img-table">
                    <table className="table">
                        <div>{myLecture()}</div>
                    </table>
                </div>
            </div>
        </>
    );
}

export default MyList;
