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
     * Check if a win or a tie has been accomplished
     */
    checkWin() {
        // check rows
        for (let i = 0; i < 3; i++) {
            console.log(i)
            if (this.gameboard[i*3] != '' &&
                this.gameboard[i*3] == this.gameboard[i*3+1] &&
                this.gameboard[i*3+1] == this.gameboard[i*3+2])
            {
                return 'win'
            }
        }

        // check columns
        for (let i = 0; i < 3; i++) {
            if (this.gameboard[i] != '' &&
                this.gameboard[i] == this.gameboard[i+3] &&
                this.gameboard[i+3] == this.gameboard[i+6] )
            {
                return 'win'
            }
        }

        // check diagonals
        if (this.gameboard[0] != '' &&
            this.gameboard[0] == this.gameboard[4] &&
            this.gameboard[4] == this.gameboard[8])
        {
            return 'win'
        }

        if (this.gameboard[2] != '' &&
            this.gameboard[2] == this.gameboard[4] &&
            this.gameboard[4] == this.gameboard[6])
        {
            return 'win'
        }

        // check if is a draw
        if (!this.gameboard.includes('')) {
            return 'draw';
        }

        return '';
    }
}
