import './style/Nav.css'

const Nav = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="img/logo.png" alt="Wetflix" />
                </a>
            </div>
            <div className="header--user">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
            </div>
        </header>
    );
};

export default Nav;
