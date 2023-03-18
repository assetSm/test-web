import "./RoundResultsInner.css";
import {Player} from "@lottiefiles/react-lottie-player";

const RoundResultsInner = ({onClickHandler} : {onClickHandler: () => void}) => {
    return (
        <div className="container round_results_inner">
            <div className="round_results_inner_return_btn" onClick={onClickHandler}>
                <div className="round_results_inner_return_triangle"></div>
                <p className="round_results_inner_return_btn_text">НАЗАД</p>
            </div>
            <div className="round_results_inner_title_wrap" onClick={onClickHandler}>
                <h3 className="results_title">ИТОГИ РАУНДОВ</h3>
                <p className="round_results_inner_text">ПРЕСЕЙЛЫ ДО ОФИЦИАЛЬНОГО ЛИСТИНГА</p>
            </div>
            <ul className="round_results_list">
                <li className="round_results_item">
                    <div className="round_results_item_title">
                        <img src="src/assets/images/*.svg" className="results_item_img"/>
                        <p className="results_item_text">SEED</p>
                        <span className="results_item_text_span">end</span>
                    </div>
                    <div className="round_results_item_info">
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">токенов</span>
                            <span className="round_results_item_info_text">10 000 000</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">цена</span>
                            <span className="round_results_item_info_text">$0.04</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">старт</span>
                            <span className="round_results_item_info_text">01.05.22</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">конец</span>
                            <span className="round_results_item_info_text">23.06.22</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">выкуплено</span>
                            <span className="round_results_item_info_text">6 198 540</span>
                        </div>
                        <p className="round_results_item_info_text percent">61.9%</p>
                    </div>
                </li>
                <li className="round_results_item">
                    <div className="round_results_item_title">
                        <p className="results_item_text">( ) PRIVATE</p>
                        <span className="results_item_text_span">sold out</span>
                    </div>
                    <div className="round_results_item_info">
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">токенов</span>
                            <span className="round_results_item_info_text">10 000 000</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">цена</span>
                            <span className="round_results_item_info_text">$0.06</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">старт</span>
                            <span className="round_results_item_info_text">18.08.22</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">конец</span>
                            <span className="round_results_item_info_text">21.09.22</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text">выкуплено</span>
                            <span className="round_results_item_info_text">10 000 000</span>
                        </div>
                        <p className="round_results_item_info_text percent">100%</p>
                    </div>
                </li>
                <li className="round_results_item">
                    <div className="round_results_item_title">
                        <p className="results_item_text">! PUBLIC</p>
                        <span className="results_item_text_span">13,67%</span>
                    </div>
                    <div className="round_results_item_info">
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text strong">токенов</span>
                            <span className="round_results_item_info_text strong">30 000 000</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text strong">цена</span>
                            <span className="round_results_item_info_text strong">$0.08</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text strong">старт</span>
                            <span className="round_results_item_info_text strong">10.10.22</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text strong">конец</span>
                            <span className="round_results_item_info_text strong">---</span>
                        </div>
                        <div className="round_results_item_info_block">
                            <span className="round_results_item_info_text strong">выкуплено</span>
                            <span className="round_results_item_info_text strong">4 103 136</span>
                        </div>
                        <p className="round_results_item_info_text percent strong">13,67%</p>
                    </div>
                </li>
            </ul>
            <div className="round_results_info">
                <img className="qr" src='src/assets/images/QR_ru.svg'/>
                <div>
                    <p className="round_results_info_text">Всего 85 678 держателей токенов LETIT</p>
                    <p className="followers">подписчики @Letit_app узнают инфу по сейлам раньше всех</p>
                </div>
                <Player
                    src="src/assets/kitten.json"loop
                    autoplay
                    style={{ height: '240px', width: '259px' }}
                />
                <button className="round_results_info_btn">подписаться</button>
            </div>
        </div>
    )
};

export default RoundResultsInner;