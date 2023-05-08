import "./style.css"
import cardGame from "../../components/CardGame";
import cardFrontBack from "../../components/cardFrontBack";


function boardGame (quantidadeCards){
    const $htmlCardFrontBack = cardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(quantidadeCards);

    return`
        <section class="board-game">
        ${$htmlContent}
        </section>
    `
};

export default boardGame