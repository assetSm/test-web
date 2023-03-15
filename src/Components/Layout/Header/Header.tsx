import "./Header.css";

const Header = () => {
    return (
            <div className="header container">
                <img className="burger_menu" src="src/assets/images/burger_menu.svg"/>
            <div className="header_logo">
                <video width="85px" height="48px">
                    <source src="src/assets/logo.mp4"/>
                        Your browser does not support the video tag.
                </video>
            </div>
            <nav className="header_menu">
                <a href="#" className="header_menu_link">White Paper</a>
                <a href="#" className="header_menu_link">Тарифы</a>
                <a href="#" className="header_menu_link">Магазин</a>
                <a href="#" className="header_menu_link">Школа</a>
                <a href="#" className="header_menu_link">Блог</a>
                <a href="#" className="header_menu_link">FAQ</a>
            </nav>
            <div className="header_social_networks">
                <a href="#"><img src="src/assets/images/twitter.svg" alt="twitter" className="header_social_networks_logo"/></a>
                    <a href="#"><img src="src/assets/images/tg.svg" alt="telegram" className="header_social_networks_logo"/></a>
                        <a href="#"><img src="src/assets/images/inst.svg" alt="instagram" className="header_social_networks_logo"/></a>
                            <a href="#"><img src="src/assets/images/linkedin.svg" alt="linkendin" className="header_social_networks_logo"/></a>
                                <a href="#"><img src="src/assets/images/youtube.svg" alt="youtube" className="header_social_networks_logo"/></a>
                                    <a href="#"><img src="src/assets/images/sm.svg" alt="sm" className="header_social_networks_logo"/></a>
            </div>
            <div className="header_language_logo">
                <a href="#" className="header_language_logo_text">EN</a>
            </div>
        </div>
    )
};

export default Header;