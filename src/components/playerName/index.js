import "./style.css"

const player1Name = "Player1"
const player2Name = "Player2"

function playerName (content){

    return`
        <p class="player-name">
            ${content}
        </p>
    `
} 

export default playerName