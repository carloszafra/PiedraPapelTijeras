class jugador {
    constructor(name = "", move = 1) {
        this.name = name;
        this.move = move;
    }
}

let player1 = new jugador("jugador 1");
let player2 = new jugador("jugador 2");

const card1 = document.getElementsByClassName("player1")[0];
const card2 = document.getElementsByClassName("player2")[0];
const card3 = document.getElementsByClassName("result")[0];
const resetButton = document.getElementById("reset");


const captureInput = (player = "1", name = "jugador1") => {
    if (player === "1") {
        player1.name = name
    }
    else {
        player2.name = name
    }
}

const playerMove = (player = "1", move = 1, step = null) => {

    if (player === "1") {
        player1.move = move
    }
    else {
        player2.move = move
    }

    if (step === '1') {
        card1.style.display = "none";
        card2.style.display = "flex"
    }
    else {
        handleResult();
    }
}

const handleResult = () => {
    card2.style.display = "none";
    card3.style.display = "flex";
    if (player1.move === player2.move) {
        displayResult(0);
    }
    else {
        if (player1.move === 1) {
            player2.move === 2
                ? displayResult(2)
                : displayResult(1)
        }
        else if (player1.move === 2) {
            player2.move === 1
                ? displayResult(1)
                : displayResult(2)
        }
        else if (player1.move === 3) {
            player2.move === 2
                ? displayResult(1)
                : displayResult(2)
        }
    }

    card2.style.display = "none";
    card3.style.display = "flex";
    resetButton.style.display = "block"
}

const displayResult = (winner) => {
    const results = ["piedra", "papel", "tijeras"];
    let p1 = player1.move - 1;
    let p2 = player2.move - 1;

    switch (winner) {
        case 0:
            card3.innerHTML =
                `<h1>Empate</h1>
             <p>${player1.name}: ${results[p1]}</p>
             <p>${player2.name}: ${results[p2]}</p>
             `
            break;
        case 1:
            console.log("gano jugador 1")
            card3.innerHTML =
                `<h1>Ganó ${player1.name}</h1>
             <p>${player1.name}: ${results[p1]}</p>
             <p>${player2.name}: ${results[p2]}</p>
             `
            break;
        case 2:
            console.log("gano jugador 2")
            card3.innerHTML =
                `<h1>Ganó ${player2.name}</h1>
            <p>${player1.name}: ${results[p1]}</p>
            <p>${player2.name}: ${results[p2]}</p>
            `
            break;
        default:
            break;
    }


    resetButton.addEventListener("click", () => {
        resetButton.style.display = "none";
        card3.style.display = "none";
        card1.style.display = "flex";
    });

}








