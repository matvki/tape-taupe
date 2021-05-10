let gameBoard = document.getElementById('game');
let pts = 0;
let time = 0;
document.getElementById("play").addEventListener('click', () => {
    let gameBL = parseInt(document.getElementById('gameBoard').value);
    document.querySelector('button').classList.add('hide');
    document.querySelector('#gameBoard').classList.add('hide');
    document.querySelector('#gameDificulty').classList.add('hide');
    switch (gameBL) {
        case 3:
            gameBoard.innerHTML = `<table id='three'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
        case 5:
            gameBoard.innerHTML = `<table id='five'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
        case 4:
            gameBoard.innerHTML = `<table id='four'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
    }
    let dificulty = document.getElementById('gameDificulty').value;
    switch (dificulty) {
        case "easy":
            time = 5000;
            break;
        case "normal":
            time = 3000;
            break;
        case "hard":
            time = 2000;
            break;
        case "godsens":
            time = 250;
            break;
    }

    game = setInterval(moleTimer, time);
    lessPts = setInterval(lessPoint, time);
    timerGame = setInterval(timer, 1000);
})

function point() {
    moleTimer();
    clearInterval(lessPts);
    lessPts = setInterval(lessPoint, time);
    pts++;
}

function lessPoint() {
    let dificulty = document.getElementById('gameDificulty').value;
    switch (dificulty) {
        case "hard":
            pts -= 2;
            break;
        case "godsens":
            pts = (pts - 1) / 2 - 1;
            break;
        default:
            pts--;
            break;
    }
}

function moleTimer() {
    let gameBL = parseInt(document.getElementById('gameBoard').value);
    switch (gameBL) {
        case 3:
            gameBoard.innerHTML = `<table id='three'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
        case 5:
            gameBoard.innerHTML = `<table id='five'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
        case 4:
            gameBoard.innerHTML = `<table id='four'><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr><tr><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td><td><img src="./img/roche.png" alt=""></td></tr></table>`
            break;
    }
    let table = document.querySelector("table");
    let moleCol = Math.floor(Math.random() * Math.floor(gameBL));
    let moleBox = Math.floor(Math.random() * Math.floor(gameBL));
    let nbrMS = Math.floor(Math.random() * Math.floor(3));
    let moleSkin = ['<button id="taupi" class="mole" onclick="point()"></button>', '<button id="trioN" class="mole" onclick="point()"></button>', '<button id="trioA" class="mole" onclick="point()"></button>']
    table.rows[moleCol].cells[moleBox].innerHTML = moleSkin[nbrMS];
}

let j = 10;

function timer() {
    if (j != 0) {
        document.querySelector("#timer").innerHTML = `${j} seconds restantes`
        j--
    } else {
        document.querySelector("#timer").innerHTML = 'temps écoulé';
        clearInterval(game);
        clearInterval(timerGame);
        gameBoard.innerHTML = `Fin de partie vous avez ${pts} points`
        document.querySelector('#refresh').classList.remove('hide');
    }
}

function refresh() {
    window.location.reload();
}