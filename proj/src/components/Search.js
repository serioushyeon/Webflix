import "../style/style.css"

const Search = () => {
    return (
        <>
            <div className="top">
                <img src={"/img/webflix-logo.png"} id="logo" width="15%" height="15%" />

                <div className="search-window">
                    <span id="search-icon"><i className="fas fa-search"></i></span>
                    <input type="text" id="search" placeholder="검색" />
                    <span id="delete-icon"><i className="fas fa-times-circle"></i></span>
                </div>
                
                <div className="profile">
                    <span id="profile-icon-blue"><img src={"img/profile-blue.png"} width="55px" height="55px" /></span>
                </div>
            </div>

            <div className="search-results">
                <div className="img-table">
                    <table className="table">
                        <tr>
                            <td><img src={"img/lecture/001.jpg"} /></td>
                            <td><img src={"img/lecture/002.jpg"} /></td>
                            <td><img src={"img/lecture/003.jpg"} /></td>
                            <td><img src={"img/lecture/004.jpg"} /></td>
                            <td><img src={"img/lecture/005.jpg"} /></td>
                        </tr>
                        <tr>
                            <td><img src={"img/lecture/006.jpg"} /></td>
                            <td><img src={"img/lecture/007.jpg"} /></td>
                            <td><img src={"img/lecture/008.jpg"} /></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Search;