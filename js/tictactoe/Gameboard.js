import Player from './Player.js';

export default class Gameboard {

    constructor(gameboard) {
        this.gameboard = gameboard;
        this.players = [new Player('X'), new Player('O')]
        this.nextPlayer = this.players[0];
    }

    setNextPlayer() {
        this.nextPlayer === this.players[0] ?
            this.nextPlayer = this.players[1] : this.nextPlayer = this.players[0];
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
        return this.gameboard[index];
    }

    /**
     * Sets the gameboard field value of next Player on the move
     * @param index Index of the game board field
     * @return {void}
     */
    setFieldValue(index) {
        if (this.gameboard) {
            this.gameboard[index] = this.nextPlayer.symbol;
        }
    }

    /**
     * Prints game board values to the console
     * @return {void}
     */
    printGameboard() {
        console.log(this.gameboard);
    }

    /**
     * Check if a win or a tie has ben accomplished
     */
    checkWin() {
        console.log('check win');
    }


}