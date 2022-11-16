import React, { useEffect, useState } from 'react';

const baseUrl = "https://image.tmdb.org/t/p/original/"; // file not Found img

const Lecture = ({title}) => {
    const [lectures, setLectures] = useState([]);

    return (
        <div className='Lecture'>
            <h2>{title}</h2>
        </div>
    )
};

export default Lecture;

