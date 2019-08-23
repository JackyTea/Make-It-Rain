/*
    Jacky Tea
    Make It Rain
    22/08/19
    game.js
*/

//global counter
let counter = 0;

//clear starting prompt
function removeStartMessage() {
    let startMsg = document.getElementById('start-dialog');
    startMsg.innerHTML = "";
}

//keep score
function keepScore(counter) {
    let points = document.getElementById('points');
    let number = document.createTextNode(counter + 'x');
    points.innerHTML = "";
    points.appendChild(number);
}

//reset game
function resetGame() {
    counter = 0;
    keepScore(0);
    let prompt = document.getElementById('start-dialog');
    let h1 = document.createElement('h1');
    let msg = document.createTextNode('Game reset!');
    prompt.innerHTML = "";
    h1.appendChild(msg);
    prompt.appendChild(h1);
}

//spawn a rain drop
function appendDiv(event) {

    keepScore(++counter);
    removeStartMessage();

    //colors
    const colours = ["magenta", "cyan", "yellow", "lime", "pink"];

    //components
    let field = document.getElementById('playable-area');
    let raindrop = document.createElement('div');

    //style
    raindrop.style.width = "50px";
    raindrop.style.height = "50px";
    raindrop.style.background = colours[Math.floor(Math.random() * colours.length)];
    raindrop.className = "raindrop";

    //positioning
    let x = event.clientX;
    let y = event.clientY;
    raindrop.style.position = "fixed";
    raindrop.style.top = y + "px";
    raindrop.style.bottom = y + "px";
    raindrop.style.left = x + "px";
    raindrop.style.right = x + "px";

    //animate raindrop
    var timer = 0;
    var falling = setInterval(moveDown, 1);
    function moveDown() {
        if (timer === 1250) {
            raindrop.innerHTML = "";
            field.removeChild(raindrop);
            clearInterval(falling);
        } else {
            ++timer;
            y += 3;
            raindrop.style.top = y + "px";
        }
    }

    //render
    field.appendChild(raindrop);
}