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
                { open ? null  : <>
                    <h3 className="results_title">ИТОГИ РАУНДОВ</h3>
                    <div className="results_triangle"></div>
                <ul className="results_list">
                <li className="results_item">
                    <img src="src/assets/images/*.svg" className="results_item_img"/>
                    <p className="results_item_text">SEED</p>
                    <span className="results_item_text_span">end</span>
                </li>
                <li className="results_item">
                    <span className="results_item_text"></span>
                    <p className="results_item_text">( ) PRIVATE</p>
                    <span className="results_item_text_span">sold out</span>
                </li>
                <li className="results_item">
                    <p className="results_item_text">! PUBLIC</p>
                    <span className="results_item_text_span">13,67%</span>
                </li>
                </ul>
                </>}
            </div>
            {open ? <RoundResultsInner onClickHandler={clickHandler}/> : null}
        </div>
    )
};

export default RoundResults;