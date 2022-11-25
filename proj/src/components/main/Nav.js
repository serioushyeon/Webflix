import './style/Nav.css'

const Nav = () => {
    return (
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
                    <input type="text" id="search" placeholder="검색" />
                    <span id="delete-icon"><i className="fas fa-times-circle"></i></span>
                </div>
            <div className="header--user">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
            </div>
        </header>
    );
};

export default Nav;