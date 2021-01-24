import Player from './Player.js';

export default class Gameboard {

    constructor(gameboard) {
        this.gameboard = Array(9).fill('');
        this.players = [new Player('X'), new Player('O')]
        this.nextPlayer = this.players[0];
        this.initGameboard();
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
        if (this.gameboard[index] === '') {
            this.gameboard[index] = this.nextPlayer.symbol;
            return true;
        }

        return false;
    }

    /**
     * Prints game board values to the console
     * @return {void}
     */
    printGameboard() {
        console.log(this.gameboard);
    }

    initGameboard() {
        let element;

        this.gameboard.forEach((field, index) => {
            element = document.createElement('div');
            element.id = index;
            element.innerText = field;

            document.getElementById('gameboard').appendChild(element);
        });
    }

    drawGameboard() {
        let gameboadHTMLElement = document.getElementById('gameboard');
        Array.from(gameboadHTMLElement.children).forEach((element, i) => {
            element.innerText = this.gameboard[i];
        })
    }

    /**
     * Check if a win or a tie has ben accomplished
     */
    checkWin() {
        console.log('check win');
    }
}
