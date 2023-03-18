import "./LoyaltyProgramInner.css";
import {Player} from "@lottiefiles/react-lottie-player";
import animationData from "../../../assets/flower.json";

interface ILoyaltyProgramInnerProps {
    onClickHandler: () => void;
}

const LoyaltyProgramInner: React.FC<ILoyaltyProgramInnerProps> = ({onClickHandler}) => {
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
            <div className="loyalty_inner_return_btn_wrap" onClick={onClickHandler}>
                <div className="loyalty_inner_return_btn_triangle"></div>
                <p className="loyalty_inner_return_btn_text">НАЗАД</p>
            </div>
            <div className="loyalty_inner_title_wrap" onClick={onClickHandler}>
                <div className="loyalty_title_wrap">
                    <h3 className="loyalty_title" >ПРОГРАММЫ ЛОЯЛЬНОСТИ</h3>
                    <p className="loyalty_text">скидки до 100% на подписку к торговому терминалу Letit</p>
                </div>
                <div className={"loyalty_inner_animation"}>
                <Player
                    src="src/assets/flower.json"
                    loop
                    autoplay
                />
                </div>
            </div>
            <div className="loyalty_list">
                <div className="loyalty_program_levels">
                    <h5 className="loyalty_item_title">Brave</h5>
                    <h5 className="loyalty_item_title">Clever</h5>
                    <h5 className="loyalty_item_title">Wise</h5>
                    <p className="loyalty_item_title_text">Форум</p>                       
                </div>
                <div className="loyalty_offers">
                    <div className="loyalty_offer no_priority_offer">
                        <img src="src/assets/images/coin5000.png" className="loyalty_item_img"/>
                        <p className="loyalty_item_percent">-50%</p>
                        <p className="loyalty_item_percent">-30%</p>
                        <p className="loyalty_item_percent">-10%</p>
                        <p className="loyalty_item_text">без приоритета</p>
                    </div>
                    <div className="loyalty_offer">
                        <img src="src/assets/images/coin10000.png" className="loyalty_item_img"/>
                        <p className="loyalty_item_percent percent_color">-100%</p>
                        <p className="loyalty_item_percent">-50%</p>
                        <p className="loyalty_item_percent">-20%</p>
                        <p className="loyalty_item_text">низкий</p>
                    </div>
                    <div className="loyalty_offer">
                        <img src="src/assets/images/coin20000.png" className="loyalty_item_img"/>
                        <p className="loyalty_item_percent percent_color">-100%</p>
                        <p className="loyalty_item_percent percent_color">-100%</p>
                        <p className="loyalty_item_percent">-50%</p>
                        <p className="loyalty_item_text">средний</p>
                    </div>
                    <div className="loyalty_offer high_offer">
                        <img src="src/assets/images/coin50000.png" className="loyalty_item_img high_offer_img"/>
                        <p className="loyalty_item_percent ">-100%</p>
                        <p className="loyalty_item_percent">-100%</p>
                        <p className="loyalty_item_percent">-100%</p>
                        <p className="loyalty_item_text">высокий</p>
                    </div>
                </div>
            </div>
            <div className="loyalty_bottom_block">
                    <div className="loyalty_bottom_line"></div>
                    <p className="loyalty_bottom_text">Для держателей 5000 и выше токенов сервисы Letit предоставляется без рекламы!</p>
            </div>
            
        </div>
    )
};

export default LoyaltyProgramInner;