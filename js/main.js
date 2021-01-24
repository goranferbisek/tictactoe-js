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

board.setFieldValue(1);
board.checkWin();
board.printGameboard();

board.setNextPlayer();
board.setFieldValue(0);
board.checkWin();
board.printGameboard();

board.setNextPlayer();
board.setFieldValue(5);
board.checkWin();
board.printGameboard();