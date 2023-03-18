import "./TradingClub.css";
import TradingClubInner from "./TradingClubInner/TradingClubInner";
import {useState} from "react";
const TradingClub = () => {
    const [open, setOpen] = useState(false);
    const clickHandler = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return(
        <div className={open ? "trading_bg_open" : "trading_bg"} >
            <div className="trading container" onClick={clickHandler}>
                { open ? null : 
                    <div className="trading_wrap">
                        <h3 className={open ? "trading_title_open" : "trading_title"} >ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h3>
                        <img src="src/assets/images/orange_triangle.svg"/>
                        <div className="trading_triangle"></div>
                        <img src="src/assets/images/fishes.png" alt="fishes" className="trading_img"/>
                    </div> 
                }
            </div>
            { open ? <TradingClubInner open={open} onClickHandler={clickHandler}/> : null}
        </div>
    )
};

export default TradingClub;