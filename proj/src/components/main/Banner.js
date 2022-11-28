import React, { useEffect, useState } from 'react';
import '../style/Banner.css';

const Banner = ({item, onPlusMyList = f => f}) => {

    let description = item.description;
    let myList = "+ My List"

    if(item.myList) {
        myList = "My List"
    }

    if(description.length > 100) {
        description = description.substring(0, 100)+'...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${item.img})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--title">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} points</div>
                        <div className="featured--year">2022년</div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a className="featured--watchButton" href='#' >▶ Play</a>
                        <a className="featured--favoriteButton"href='#' 
                        onClick={onPlusMyList} >{myList}</a>
                    </div>
                    <div className="featured--track"><strong>track: </strong>{item.track}</div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
