/*
    Jacky Tea
    Make It Rain
    22/08/19
    game.js
*/

//global counter
let counter = 0;
let red = 255;
let green = 255;
let blue = 255;

//clear starting prompt
function removeStartMessage() {
    let startMsg = document.getElementById('start-dialog');
    startMsg.innerHTML = "";
}

//keep score
function keepScore(counter) {
    console.log(red, green, blue)
    let points = document.getElementById('points');
    let number = document.createTextNode(counter + 'x');
    points.innerHTML = "";
    if (green > 234 || blue > 0) {
        if (green > 234) {
            green -= 10;
        }
        if (blue > 0) {
            blue -= 10;
        }
        points.style.color = "rgb(255," + green + "," + blue + ")";
    } else if (green > 0 && blue <= 0) {
        if (green > 0) {
            green -= 10;
        }
        points.style.color = "rgb(255," + green + "," + blue + ")";
    } else if (green <= 0 && blue <= 0 && red > 0) {
        if (red > 0) {
            red -= 10;
        }
        points.style.color = "rgb(" + red + "," + green + "," + blue + ")";
    } else if (red <= 0 && green <= 0 && blue <= 0) {
        number = document.createTextNode("SUPER! " + counter + 'x');
        points.style.color = "white";
        points.style.animation = "rainbow infinite 3.5s";
    }
    points.appendChild(number);
}

//reset game
function resetGame() {
    counter = 0;
    red = 255;
    green = 255;
    blue = 255;
    keepScore(0);
    let prompt = document.getElementById('start-dialog');
    let h1 = document.createElement('h1');
    let msg = document.createTextNode('Game reset!');
    let points = document.getElementById('points');
    points.style.animation = "none";
    points.style.color = "white";
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