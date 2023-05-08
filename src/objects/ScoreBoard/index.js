import "./style.css"
import playerName from '../../components/playerName';
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function scoreBoard(){
    return /*html*/ `
    <header class="score-board">
    ${ArrowDown()}
    ${playerName('Player1')}
    ${PlayerScore()}
    ${VsPlayer()}
    ${PlayerScore()}
    ${playerName('Player2')}
    </header>
    `;
}

export default scoreBoard;