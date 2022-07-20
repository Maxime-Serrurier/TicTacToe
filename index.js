// Variables
let boxes = [...document.querySelectorAll('.box')];
let player = document.querySelector('#player');
let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');
let scoreNull = document.querySelector('#scoreNull');

// State
let state = {
    currentPlayer: 1,
    scoreP1: 0,
    scoreP2: 0,
    draw: 0,
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    b9: 0,
}

// Fonctions
const resetState = () => {
    currentPlayer = 1;
    state.b1 = 0;
    state.b2 = 0;
    state.b3 = 0;
    state.b4 = 0;
    state.b5 = 0;
    state.b6 = 0;
    state.b7 = 0;
    state.b8 = 0;
    state.b9 = 0;
}

const checkWin = () => {
    if(
        (state.b1 == state.b2 && state.b2 == state.b3 && state.b1 > 0) ||
        (state.b1 == state.b4 && state.b4 == state.b7 && state.b1 > 0) ||
        (state.b1 == state.b5 && state.b5 == state.b9 && state.b1 > 0) ||
        (state.b2 == state.b5 && state.b5 == state.b8 && state.b2 > 0) ||
        (state.b3 == state.b6 && state.b6 == state.b9 && state.b3 > 0) ||
        (state.b4 == state.b5 && state.b5 == state.b6 && state.b4 > 0) ||
        (state.b7 == state.b8 && state.b8 == state.b9 && state.b7 > 0)
    ){
        return true;
    } else if(
        state.b1 !== 0 &&
        state.b2 !== 0 &&
        state.b3 !== 0 &&
        state.b4 !== 0 &&
        state.b5 !== 0 &&
        state.b6 !== 0 &&
        state.b7 !== 0 &&
        state.b8 !== 0 &&
        state.b9 !== 0
    ){
        return null;
    } else {
        return false;
    }
}

const validBox = (e) => {
    let idBox = e.target.id;
    if(state[idBox] !== 0) return;

    state[idBox] = state.currentPlayer;

    let isWin = checkWin();

    if(isWin === true){
        alert("Le joueur" + state.currentPlayer + " a gagné !");
        if(state.currentPlayer === 1){
            state.scoreP1++;
            score1.textContent = state.scoreP1;
        } else {
            state.scoreP2++;
            score2.textContent = state.scoreP2;
        }
        resetState();
        boxes.forEach((b) => (b.textContent = ""));
    } else if (isWin === null){
        alert("Match nul !");
        state.draw++;
        scoreNull.textContent = state.draw;
        resetState();
        boxes.forEach((b) => (b.textContent = ""));
    } else if (isWin === false){
        if(state.currentPlayer === 1){
            e.target.textContent = "X";
            state.currentPlayer = 2;
            player.textContent = "2";
        } else {
            e.target.textContent = "O";
            state.currentPlayer = 1;
            player.textContent = "1";
        }
    }
}

boxes.forEach((element) => {
    element.addEventListener("click", validBox);
})