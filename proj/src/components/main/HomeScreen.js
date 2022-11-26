import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import Data from './Data';
import '../style/HomeScreen.css';

const HomeScreen = () => {
    const [bannerLecture, setBannerLectrue] = useState(Data[0]);
    const [favoriteList, setFavoriteList] = useState(Data);
    const [voteTopList, setVoteTopList] = useState(Data);
    const [majorList, setMajorList] = useState(Data);
    const [generalList, setGeneralList] = useState(Data);
    
    useEffect(() => {
        let list = Data.filter((lecture) => lecture.favorite === true);
        setFavoriteList(list);
    }, []);

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
        let choosen = Math.floor(Math.random() * 12);
        setBannerLectrue(Data[choosen]);
    }, []);

    return (
        <div className='homeScreen'>
            <Nav />
            <div className='banner'>
                <Banner item={bannerLecture} />
            </div>
            <section className='lists'>
                <Lecture title={"내가 찜한 콘텐츠"} items = {favoriteList} />
                <Lecture title={"추천 강의"} items={voteTopList} />
                <Lecture title={"전공 강의"} items={majorList} />
                <Lecture title={"교양 강의"} items={generalList} />
            </section>
            <footer>
                Lecture introduction homepage ❤️ Webflix By <strong><a href="https://github.com/seriouhyeon/Webflix" target="_blank">Reaction</a></strong><br />
                Design Reference <a href="https://netflix.com" target="_blank"><strong>Netflix</strong></a><br />
            </footer>
        </div>
    )
};

export default HomeScreen;