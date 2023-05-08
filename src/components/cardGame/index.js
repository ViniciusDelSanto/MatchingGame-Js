import "./style.css"

function cardGame (icon ="aluraPixel", alt="Log da Alura"){

    return`
        <article class="card-game" onclick="viraCard(event)">
            <img src="images/${icon}.png" alt="${alt}">
        </article>
    `
} 

export default cardGame