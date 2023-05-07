import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'

import cardGame from "./src/components/CardGame";


const $root = document.querySelector("#root");
const $htmlcardGame = cardGame()

$root.insertAdjacentHTML("beforeend", $htmlcardGame)