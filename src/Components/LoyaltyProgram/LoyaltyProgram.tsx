import "./LoyaltyProgram.css";
import LoyaltyProgramInner from "./LoyaltyProgramInner/LoyaltyProgramInner";
import { useState } from "react";

const LoyaltyProgram = () => {
    const [open, setOpen] = useState(false);
    const clickHandler = (): void => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <div className="loyalty_bg">
            <div className="container loyalty" onClick={clickHandler}>
                { open ? null
                    :<div className="loyalty_title_hide_wrap">
                        <h3 className="loyalty_title">ПРОГРАММЫ ЛОЯЛЬНОСТИ</h3>
                        <div className="loyalty_icon"></div>
                        <p className="loyalty_text">скидки до 100% на подписку к торговому терминалу Letit</p>
                     </div> 
                }
            </div>
            {open ? <LoyaltyProgramInner onClickHandler={clickHandler}/> : null}
        </div>
    )

};

export default LoyaltyProgram;