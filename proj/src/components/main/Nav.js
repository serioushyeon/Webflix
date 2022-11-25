import './style/Nav.css'

const Nav = () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/homescreen">
                    <img src="img/logo.png" alt="Wetflix_logo" />
                </a>
            </div>
            <div className="search-window">
                    <span id="search-icon"><i className="fas fa-search"></i></span>
                    <input type="text" id="search" placeholder="검색" />
                    <span id="delete-icon"><i className="fas fa-times-circle"></i></span>
                </div>
            <div className="header--user">
                <a href='/profile'>
                    <img src="http://occ-0-3996-1361.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" alt="User" />
                </a>
            </div>
        </header>
    );
};

export default Nav;