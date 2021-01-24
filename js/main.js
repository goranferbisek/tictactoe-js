import GameBoard from './tictactoe/GameBoard.js';

function readGameBoard() {
    let gameBoardArray = [];

    const gameBoard = document.querySelector('#game-board').children;

    for (let i = 0; i < gameBoard.length; i++) {
        gameBoardArray[i] = gameBoard.item(i).innerText;
    }

    return gameBoardArray;
}


//init game
let gameBoard = new GameBoard(readGameBoard());

console.log(gameBoard.getNextPlayer().symbol);
gameBoard.setNextPlayer();

console.log(gameBoard.getNextPlayer());
gameBoard.setNextPlayer();
console.log(gameBoard.getNextPlayer());

//gameBoard.setFieldValue(1);
//gameBoard.printGameBoard();
