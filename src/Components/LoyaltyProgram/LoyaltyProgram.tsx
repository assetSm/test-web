import "./LoyaltyProgram.css";
import LoyaltyProgramInner from "./LoyaltyProgramInner/LoyaltyProgramInner";
import { useState } from "react";

const LoyaltyProgram = () => {
    const [open, setOpen] = useState(false);
    const clickHandler = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <div className="loyalty_bg">
            <div className="container loyalty" onClick={clickHandler}>
                <h3 className="loyalty_title">ПРОГРАММЫ ЛОЯЛЬНОСТИ</h3>
                <img className="loyalty_icon" src="src/assets/images/triangle.svg"/>
                {   open ? null: <p className="loyalty_text">скидки до 100% на подписку
                    к торговому терминалу Letit</p>}
            </div>
            {open ? <LoyaltyProgramInner /> : null}
        </div>
    )

};

export default LoyaltyProgram;