import GameBoard from './tictactoe/GameBoard.js';

function readGameBoard() {
    let gameBoardArray = [];

    const gameBoard = document.querySelector('.game-board').children;

    for (let i = 0; i < gameBoard.length; i++) {
        gameBoardArray[i] = gameBoard.item(i).innerText;
    }

    return gameBoardArray;
}

//init game
let gameBoard = new GameBoard(readGameBoard());


gameBoard.setFieldValue(1,"X");
gameBoard.printGameBoard();
//while
