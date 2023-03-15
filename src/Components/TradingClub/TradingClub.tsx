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
                <h3 className={open ? "trading_title_open" : "trading_title"}>ЗАКРЫТЫЙ ТРЕЙДИНГ КЛУБ</h3>
                { open ?
                    <>
                    <img src="src/assets/images/orange_triangle.svg"/>
                    <div className="trading_icon">
                        <video width="166px" height="166px">
                            <source src="src/assets/logo.mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <p className="trading_icon_text">CLUB</p>
                    </div>
                    </>
                    : <>
                        <img src="src/assets/images/triangle.svg" className="trading_triangle" alt="triangle"/>
                        <img src="src/assets/images/fishes.png" alt="fishes" className="trading_img"/>
                    </>
                }
            </div>
            { open ? <TradingClubInner/> : null}
        </div>
    )
};

export default TradingClub;