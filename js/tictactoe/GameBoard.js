import Player from './Player.js';

export default class GameBoard {

    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.players = [new Player('X'), new Player('O')]
        this.nextPlayer = this.players[0];
    }

    setNextPlayer() {
        if (this.nextPlayer === this.players[0]) {
            this.nextPlayer = this.players[1]
        } else {
            this.nextPlayer = this.players[0]
        }
    }

    getNextPlayer() {
        return this.nextPlayer;
    }

    /**
     *
     * @param index Index of the game board field
     * @return Value of the game board field containing Player representation symbol
     */
    getFieldValue(index) {
        return this.gameBoard[index];
    }

    /**
     * Sets the gameboard field value of next Player on the move
     * @param index Index of the game board field
     * @return {void}
     */
    setFieldValue(index) {
        this.gameBoard[index] = this.nextPlayer.symbol;
    }

    /**
     * Prints game board values to the console
     * @return {void}
     */
    printGameBoard() {
        console.log(this.gameBoard);
    }
}