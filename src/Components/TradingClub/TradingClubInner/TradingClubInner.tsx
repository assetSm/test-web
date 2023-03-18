import "./TradingClubInner.css";

const TradingClubInner = ({onClickHandler, open}: {onClickHandler: () => void; open: boolean}) => {
    return(
        <div className="container">
            <div className="trading_inner">
            <div className="trading_inner_title_wrap">
                <div className="trading_return_btn_wrap" onClick={onClickHandler}>
                    <div className="trading_return_btn_triangle"></div>
                    <p className="trading_return_btn_text">НАЗАД</p>
                </div>
                <h3 className="trading_inner_title" onClick={onClickHandler}>ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h3>
            </div>
            <div className="trading_icon">
                <video width="166px" height="166px">
                    <source src="src/assets/logo.mp4"/>
                    Your browser does not support the video tag.
                </video>
                <p className="trading_icon_text">CLUB</p>
            </div>
            <ul className="trading_list">
                <li className="trading_item">
                    <div className="trading_item_block">
                    <div className="trading_item_wrap">
                        <div className="trading_item_inner">
                            <div className="trading_sales">
                                <img src="src/assets/images/dolphin/ellipse.png" className="ellipse"/>
                                <img src="src/assets/images/dolphin/dolphin_round.png" className="round"/>
                                <img src="src/assets/images/dolphin/dolphin.png" className="icon"/>
                            </div>
                            <h4 className="trading_item_inner_title">100 000 LETIT</h4>
                            <p className="trading_item_inner_text">8 000 USDT</p>
                            <span className="trading_item_inner_text_usdt">(0.08 USDT)</span>
                            <p className="trading_item_inner_text_sale">Только на период токен сейла:</p>
                            <p className="trading_item_inner_text_present">1 доля в подарок за 18 месяцев</p>
                        </div>
                        <div className="trading_item_info">
                            <div>
                            <h5 className="trading_item_title">Постоянные привелегии:</h5>
                            <h6 className="dolphin_text">Базовое обучение</h6>
                            <p className="trading_item_info_text_small">(стоимость вне клуба – 2100 USDT)</p>
                            <h6 className="dolphin_text">Закрытый канал</h6>
                            <p className="trading_item_info_text">технический анализ</p>
                            <p className="trading_item_info_text_small">(недоступен вне клуба)</p>
                            </div>
                            <div className="summit_traders">
                                <h6 className="dolphin_text">LETIT SUMMIT TRADERS</h6>
                                <p className="trading_item_info_text">возможность участия</p>
                            </div>
                            <div className="crypto_conference">
                                <h6 className="dolphin_text">Криптоконферении</h6>
                                <p className="trading_item_info_text">оповещение об участии</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="trading_item_text">Выгода за первый год:</p>
                        <p className="trading_item_discount">8 500 USDT</p>
                    </div>
                    </div>
                    <div className="trading_item_buttons">
                        <button className="trading_item_btn dolphin_color_btn">Узнать больше</button>
                        <button className="trading_item_btn dolphin_color_btn">Купить пакет</button>
                    </div>
                </li>
                <li className="trading_item ">
                    <div className="trading_item_block shark">
                    <div className="trading_item_wrap shark_wrap">
                        <div className="trading_item_inner shark_inner">
                            <div className="trading_sales">
                                <img src="src/assets/images/shark/ellipse_shark.png" className="ellipse"/>
                                <img src="src/assets/images/shark/shark_round.png" className="round"/>
                                <img src="src/assets/images/shark/shark.png" className="icon"/>
                            </div>
                            <h4 className="trading_item_inner_title shark_text">200 000 LETIT</h4>
                            <p className="trading_item_inner_text shark_text">16 000 USDT</p>
                            <span className="trading_item_inner_text_usdt shark_text">(0.08 USDT)</span>
                            <p className="trading_item_inner_text_sale shark_text">Только на период токен сейла:</p>
                            <p className="trading_item_inner_text_present shark_text">2 доля в подарок за 18 месяцев</p>
                        </div>
                        <div className="trading_item_info">
                            <div>
                                <h5 className="trading_item_title shark_text">Постоянные привелегии:</h5>
                                <h6 className="shark_text">Базовое обучение с куратором</h6>
                                <p className="trading_item_info_text_small shark_text">(стоимость вне клуба – 2100 USDT)</p>
                                <h6 className="shark_text">Закрытый канал</h6>
                                <p className="trading_item_info_text shark_text">технический анализ</p>
                                <p className="trading_item_info_text shark_text">аналитика рынка</p>
                                <p className="trading_item_info_text_small shark_text">(недоступен вне клуба)</p>
                            </div>
                            <div>
                                <h6 className="summit_traders shark_text">LETIT SUMMIT TRADERS</h6>
                                <p className="trading_item_info_text shark_text">возможность участия</p>
                                <p className="trading_item_info_text shark_text">билет со скидкой 50%</p>
                                <p className="trading_item_info_text_small shark_text">(стоимость вне клуба – 5000 USDT)</p>
                            </div>
                            <div>
                                <h6 className="crypto_conference shark_text">Криптоконферении</h6>
                                <p className="trading_item_info_text shark_text">оповещение об участии</p>
                                <p className="trading_item_info_text shark_text">билет со скидкой 50%</p>
                                <p className="trading_item_info_text_small shark_text">(стоимость вне клуба – 4000 USDT)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="trading_item_text">Выгода за первый год:</p>
                        <p className="trading_item_discount">24 620 USDT</p>
                    </div>
                    </div>
                    <div className="trading_item_buttons">
                        <button className="trading_item_btn shark_color_btn">Узнать больше</button>
                        <button className="trading_item_btn shark_color_btn">Купить пакет</button>
                    </div>
                </li>
                <li className="trading_item ">
                    <div className="trading_item_block whale">
                    <div className="trading_item_wrap whale_wrap">
                        <div className="trading_item_inner whale_inner">
                            <div className="trading_sales">
                                <img src="src/assets/images/whale/whale_ellipse.png" className="ellipse"/>
                                <img src="src/assets/images/whale/whale_round.png" className="round"/>
                                <img src="src/assets/images/whale/whale.png" className="icon"/>
                            </div>
                            <h4 className="trading_item_inner_title whale_text">200 000 LETIT</h4>
                            <p className="trading_item_inner_text whale_text">16 000 USDT</p>
                            <span className="trading_item_inner_text_usdt whale_text">(0.08 USDT)</span>
                            <p className="trading_item_inner_text_sale whale_text">Только на период токен сейла:</p>
                            <p className="trading_item_inner_text_present whale_text">2 доля в подарок за 18 месяцев</p>
                        </div>
                        <div className="trading_item_info">
                            <div>
                                <h5 className="trading_item_title whale_text">Постоянные привелегии:</h5>
                                <h6 className="whale_text">Продвинутое обучение</h6>
                                <p className="trading_item_info_text_small whale_text">(стоимость вне клуба – 2100 USDT)</p>
                                <h6 className="whale_text">Закрытый канал</h6>
                                <p className="trading_item_info_text whale_text">технический анализ</p>
                                <p className="trading_item_info_text whale_text">аналитика рынка</p>
                                <p className="trading_item_info_text whale_text">инвестиционные стратегии</p>
                                <p className="trading_item_info_text_small whale_text">(недоступен вне клуба)</p>
                            </div>
                            <div>
                                <h6 className="summit_traders whale_text">LETIT SUMMIT TRADERS</h6>
                                <p className="trading_item_info_text whale_text">возможность участия</p>
                                <p className="trading_item_info_text whale_text">бесплатный VIP билет</p>
                                <p className="trading_item_info_text_small whale_text">(стоимость вне клуба – 5000 USDT)</p>
                            </div>
                            <div>
                                <h6 className="crypto_conference whale_text">Криптоконферении</h6>
                                <p className="trading_item_info_text whale_text">совместное участие</p>
                                <p className="trading_item_info_text whale_text">бесплатные билеты</p>
                                <p className="trading_item_info_text whale_text">мерч LETIT</p>
                                <p className="trading_item_info_text whale_text">VIP места</p>
                                <p className="trading_item_info_text_small whale_text">(стоимость вне клуба – 4000 USDT)</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="trading_item_text">Выгода за первый год:</p>
                        <p className="trading_item_discount">49 000 USDT</p>
                    </div>
                    </div>
                    <div className="trading_item_buttons">
                        <button className="trading_item_btn whale_color_btn">Узнать больше</button>
                        <button className="trading_item_btn whale_color_btn">Купить пакет</button>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default TradingClubInner;