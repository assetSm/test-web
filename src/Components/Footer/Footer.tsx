import "./Footer.css";

const Footer = () => {
    return(
        <>
        <div className="footer_border">
        <footer className="footer container">
            <div className="footer_logo">
                <video width="96px" height="96px">
                    <source src="src/assets/logo.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <ul className="footer_links">
                <li className="footer_links_item">
                    <a href="#" className="footer_link">White paper</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">White List</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">Раунды пресейлов</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">Куср “Хакни трейдинг”</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">Лавка мерча и NFT</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">Функционал терминала Letit</a>
                </li>
            </ul>
            <ul className="footer_links">
                <li className="footer_links_item">
                    <a href="#" className="footer_link">FAQ</a>
                </li>
                <li className="footer_links_item">
                    <a href="#" className="footer_link">Криптословарь</a>
                </li>
                <li className="footer_links_item email">
                    <a href="#" className="footer_link">letit@letit.ap</a>
                </li>
            </ul>
            <div className="footer_sn_block">
            <ul className="footer_social_networks_list">
                <li><a href="#"><img src="src/assets/images/twitter.svg" alt="twitter" className="footer_social_networks_logo"/></a></li>
                    <li><a href="#"><img src="src/assets/images/tg.svg" alt="telegram" className="footer_social_networks_logo"/></a></li>
                    <li><a href="#"><img src="src/assets/images/inst.svg" alt="instagram" className="footer_social_networks_logo"/></a></li>
                        <li><a href="#"><img src="src/assets/images/linkedin.svg" alt="linkendin" className="footer_social_networks_logo"/></a></li>
                            <li><a href="#"><img src="src/assets/images/youtube.svg" alt="youtube" className="footer_social_networks_logo"/></a></li>
                                <li><a href="#"><img src="src/assets/images/sm.svg" alt="sm" className="footer_social_networks_logo"/></a></li>
            </ul>
                <p className="footer_sn_block_text">Подписывайтесь на открытые каналы Letit, каждый день что-то происходит</p>
            </div>
        </footer>
        </div>
    <p className="footer_copyright container">Все права защищены, любое копирование или цитирование контента LETIT допустимо с разрешения</p>
</>
    )
};


export default Footer;