import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import Data from './Data';
import './style/HomeScreen.css';

const HomeScreen = () => {
    const [header, setHeader] = useState(false);
    const [bannerLecture, setBannerLectrue] = useState(Data[0]);
    const [voteTopList, setVoteTopList] = useState(Data);
    const [majorList, setMajorList] = useState(Data);
    const [generalList, setGeneralList] = useState(Data);
    useEffect(() => {
        let list = Data.filter((lecture) => lecture.vote_average >= 50);
        setVoteTopList(list);
    }, []);

    useEffect(() => {
        let list = Data.filter((lecture) => lecture.section === "major");
        setMajorList(list);
    }, []);

    useEffect(() => {
        let list = Data.filter((lecture) => lecture.section === "general");
        setGeneralList(list);
    }, []);

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
        setBannerLectrue(Data[choosen]);
    }, []);

    return (
        <div className='homeScreen'>
            <Nav black={header} />
            <div className='banner'>
                <Banner item={bannerLecture} />
            </div>
            <section className='lists'>
                <Lecture title={"추천 강의"} items={voteTopList} />
                <Lecture title={"전공 강의"} items={majorList} />
                <Lecture title={"교양 강의"} items={generalList} />
            </section>
        </div>
    )
};

export default HomeScreen;