import "./Promo.css";

const Promo = () => {
    return(
        <div className="promo_bg">
            <div className="container promo">
                <div className={"promo_block"}>
                    <h1 className="promo_block_title">ТОКЕНЫ LETIT</h1>
                    <div>
                        <button className="promo_block_btn">LIVE!</button>
                        <p className="promo_block_text">идёт третий раунд пресейла!</p>
                    </div>
                    <p className="promo_text">Залетай на третий пресейл токенов LETIT, это уникальный крипто-актив, развернутый на BNB chain. Наша крипта открывает доступ ко всем возможностям экосистемы, листай дальше или сразу инвестируй в LETIT  на пресейлах, а после листинга на биржах следи за курсом!  ( ‾́ ◡ ‾́ )
                    </p>
                    <button className="promo_block_btn_buy">купить токены</button>
                </div>
                <div >
                    <img src="src/assets/images/promo_logo.png" className={"promo_img"}/>
                </div>
            </div>
        </div>
    )
};

export default Promo;