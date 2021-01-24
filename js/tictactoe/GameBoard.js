import Player from './Player.js';

export default class GameBoard {

    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.players = [new Player('X'), new Player('O')]
        this.nextPlayer = this.players[0];
    }

    getFieldValue(index) {
        return this.gameBoard[index];
    }

    setFieldValue(index) {
        this.gameBoard[index] = this.nextPlayer.symbol;
    }

    printGameBoard() {
        console.log(this.gameBoard);
    }
}