import React, { useState } from 'react';
import '../style/Nav.css'
import '../style/Search.css'
import Data from '../main/Data'
import Modal from '../main/Modal';
import ModalPortal from "../main/Portal";

const Search = () => {
    const [search, setSearch] = useState('');
    const [modalOn, setModalOn] = useState(false);
    const [clickedLecture, setClickedLecture] = useState();

    const onChange = e => setSearch(e.target.value);
    const onClickDelete = () => { setSearch(''); }
    const handleModal = () => setModalOn(!modalOn);

    const filterLecture = Data.filter(lecture => lecture.title.replace(" ", "").includes(search.replace(" ", "")))

    return (
        <div className='search'>
            <header>
                <div className="header--logo">
                    <a href="/homescreen">
                        <img src="img/logo.png" alt="Wetflix_logo" />
                    </a>
                </div>
                <div className="header--link">
                    <a href="/homescreen"style={{ textDecoration: "none", color: "white"}}>홈</a>
                    <a href="/favorite" style={{ textDecoration: "none", color: "white"}}>내가 찜한 콘텐츠</a>
                    <a href="https://info.hansung.ac.kr/" style={{ textDecoration: "none", color: "white"}}>종합정보시스템</a>

                </div>
                <div className="search-window">
                        <span id="search-icon"><i className="fas fa-search"></i></span>
                        <input type="text" value={search} onChange={onChange} id="search" placeholder="검색" />
                        <span id="delete-icon"><i className="fas fa-times-circle" onClick={onClickDelete}></i></span>
                    </div>
                <div className="header--user">
                    <a href='/profile'>
                        <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                    </a>
                </div>
            </header>

            <div className="search-results">
                <div className="img-table">
                    <table className="table">
                        <tr>
                        {filterLecture.length > 0 && search != '' && filterLecture.map(lecture => <td><img src={`${lecture.img}`} onMouseEnter={() => setClickedLecture(lecture)} onClick={handleModal} /></td>)}
                        </tr>
                    </table>
                </div>
            </div>

            <ModalPortal>
                {modalOn && <Modal onClose={handleModal} lecture={clickedLecture}/>}
            </ModalPortal>
        </div>
    )
}

export default Search;