import './style/Nav.css'

const Nav = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="img/logo.png" alt="Wetflix_logo" />
                </a>
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