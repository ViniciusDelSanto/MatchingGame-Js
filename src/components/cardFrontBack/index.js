import "./style.css"
import cardGame from "../CardGame";



function cardFrontBack(icon, altIcon){

    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active')
    }
    
    return /*html*/`
    <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
    <div class="card -front">
        ${cardGame()}
    </div>
    <div class="card -back">
        ${cardGame(icon, altIcon)}
    </div>
    </article>
    `
};

export default cardFrontBack;