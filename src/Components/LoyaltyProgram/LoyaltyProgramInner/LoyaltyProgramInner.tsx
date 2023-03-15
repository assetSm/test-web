import "./LoyaltyProgramInner.css";
import {Player} from "@lottiefiles/react-lottie-player";
import animationData from "../../../assets/flower.json";

const LoyaltyProgramInner = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return(
        <div className="loyalty_inner container">
            <div className="loyalty_list">
                    <div className="loyalty_list_img_wrap">
                        <img src="src/assets/images/coin5000.png" className="loyalty_item_img"/>
                        <img src="src/assets/images/coin10000.png" className="loyalty_item_img"/>
                        <img src="src/assets/images/coin20000.png" className="loyalty_item_img"/>
                        <img src="src/assets/images/coin50000.png" className="loyalty_item_img"/>
                    </div>
                    <div className="loyalty_item_wrap">
                        <div className="loyalty_item">
                            <h5 className="loyalty_item_title">Brave</h5>
                            <h5 className="loyalty_item_title">Clever</h5>
                            <h5 className="loyalty_item_title">Wise</h5>
                            <p className="loyalty_item_text">Форум</p>
                        </div>
                        <div className="loyalty_item">
                            <div className="loyalty_item_text_wrap">
                            <p className="loyalty_item_percent">-50%</p>
                            <p className="loyalty_item_percent">-30%</p>
                            <p className="loyalty_item_percent">-10%</p>
                            <p className="loyalty_item_text">без приоритета</p>
                            </div>
                        </div>
                        <div className="loyalty_item">
                            <div className="loyalty_item_text_wrap">
                            <p className="loyalty_item_percent percent_color">-100%</p>
                            <p className="loyalty_item_percent">-50%</p>
                            <p className="loyalty_item_percent">-20%</p>
                            <p className="loyalty_item_text">низкий</p>
                            </div>
                        </div>
                        <div className="loyalty_item">
                            <div className="loyalty_item_text_wrap">
                            <p className="loyalty_item_percent percent_color">-100%</p>
                            <p className="loyalty_item_percent">-100%</p>
                            <p className="loyalty_item_percent">-50%</p>
                            <p className="loyalty_item_text">средний</p>
                            </div>
                        </div>
                        <div className="loyalty_item">
                            <div className="loyalty_item_text_wrap">
                            <p className="loyalty_item_percent percent_color">-100%</p>
                            <p className="loyalty_item_percent percent_color">-100%</p>
                            <p className="loyalty_item_percent percent_color">-100%</p>
                            <p className="loyalty_item_text">высокий</p>
                            </div>
                        </div>
                    </div>
                <div className="loyalty_bottom_block">
                    <div className="loyalty_bottom_line"></div>
                    <p className="loyalty_info_text">Для держателей 5000 и выше токенов сервисы Letit предоставляется без рекламы!</p>
                </div>
            </div>
            <Player
                src="src/assets/flower.json"
                loop
                autoplay
                className={"loyalty_inner_animation"}
            />
        </div>
    )
};

export default LoyaltyProgramInner;