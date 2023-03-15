import "./RoundResults.css";
import {useState} from "react";
import RoundResultsInner from "./RoundResultsInner/RoundResultsInner";

const RoundResults = () => {
    const [open, setOpen] = useState(false);
    const clickHandler = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return(
        <div className="results_bg">
            <div className="container results" onClick={clickHandler}>
                <h3 className="results_title">ИТОГИ РАУНДОВ</h3>
                <img className="results_icon" src="src/assets/images/triangle.svg"/>
                { open ? <h3 className="results_list_title">ПРЕСЕЙЛЫ ДО ОФИЦИАЛЬНОГО ЛИСТИНГА</h3>:<ul className="results_list">
                <li className="results_item">
                    <img src="src/assets/images/*.svg" className="results_item_img"/>
                    <p className="results_item_text">SEED</p>
                    <span>end</span>
                </li>
                <li className="results_item">
                    <span className="results_item_text">( )</span>
                    <p className="results_item_text">PRIVATE</p>
                    <span>sold out</span>
                </li>
                <li className="results_item">
                    <span className="results_item_text">!</span>
                    <p className="results_item_text">PUBLIC</p>
                    <span>13,67%</span>
                </li>
                </ul>}
            </div>
            {open ? <RoundResultsInner/> : null}
        </div>
    )
};

export default RoundResults;