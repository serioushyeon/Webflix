import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Lecture from './Lecture';
import Data from './Data';
import '../style/HomeScreen.css';

const HomeScreen = () => {
    const [bannerLecture, setBannerLectrue] = useState(Data[0]);
    const [MyList, setMyList] = useState(Data);
    const [voteTopList, setVoteTopList] = useState(Data);
    const [majorList, setMajorList] = useState(Data);
    const [generalList, setGeneralList] = useState(Data);

    const onChangefavorite = (title) => {
        let lecture = Data.find(lecture => lecture.title === title);
        lecture.favorite ? lecture.vote_average-- : lecture.vote_average++;
        lecture.favorite = !lecture.favorite;
        let list = Data.filter((lecture) => lecture.vote_average >= 50);
        setVoteTopList(list);
        setBannerLectrue(lecture);
        console.log(lecture.title + " "+ lecture.favorite);
    }

    const onChagneMyList = (title) => {
        let lecture = Data.find(lecture => lecture.title === title);
        lecture.myList = !lecture.myList;
        let list = Data.filter((lecture) => lecture.myList === true)
        setMyList(list);
        setBannerLectrue(lecture);
        console.log(lecture.title + " "+ lecture.myList);
    }

    useEffect(() => {
        let choosen = Math.floor(Math.random() * 12);
        setBannerLectrue(Data[choosen]);
    },[])

    useEffect(() => {
        let list = Data.filter((lecture) => lecture.myList === true);
        setMyList(list);
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

    return ( 
        <div className='homeScreen'>
            <Nav />
            <div className='banner'>
                <Banner item={bannerLecture}
                onPlusMyList={() => onChagneMyList(bannerLecture.title)} />
            </div>
            <section className='lists'>
                <Lecture title={"추천 강의"} items={voteTopList} onPlusFavorite={onChangefavorite} onPlusMyList={onChagneMyList}/>
                <Lecture title={"내가 찜한 콘텐츠"} items = {MyList} onPlusFavorite={onChangefavorite} onPlusMyList={onChagneMyList}/>
                <Lecture title={"전공 강의"} items={majorList} onPlusFavorite={onChangefavorite} onPlusMyList={onChagneMyList}/>
                <Lecture title={"교양 강의"} items={generalList} onPlusFavorite={onChangefavorite} onPlusMyList={onChagneMyList}/>
            </section>
            <footer>
                Lecture introduction homepage ❤️ Webflix By <strong><a href="https://github.com/seriouhyeon/Webflix" target="_blank">Reaction</a></strong><br />
                Design Reference <a href="https://netflix.com" target="_blank"><strong>Netflix</strong></a><br />
            </footer>
        </div>
    )
};

export default HomeScreen;