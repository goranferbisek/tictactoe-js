import Gameboard from './tictactoe/Gameboard.js';

function readGameboard() {
    let gameboardArray = [];

    const gameboard = document.querySelector('#gameboard').children;

    for (let i = 0; i < gameboard.length; i++) {
        gameboardArray[i] = gameboard.item(i).innerText;
    }

    return gameboardArray;
}

let board = new Gameboard(readGameboard());
let fields = document.querySelector('#gameboard').children

for (let i = 0; i < fields.length; i++) {
    fields.item(i).addEventListener('click', e => {
        if (board.setFieldValue(e.target.id)) {
            //board.checkWin();
            board.setNextPlayer();
            board.printGameboard();
        } else {
            console.log('Field already taken.');
        }
    });
}
