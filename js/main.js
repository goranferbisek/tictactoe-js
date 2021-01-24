import Gameboard from './tictactoe/Gameboard.js';

let board = new Gameboard();
let fields = document.querySelector('#gameboard').children

for (let i = 0; i < fields.length; i++) {
    fields.item(i).addEventListener('click', e => {
        if (board.setFieldValue(e.target.id)) {
            let gameStatus = board.checkWin()
            if (gameStatus === '') {
                board.setNextPlayer();
            } else if (gameStatus === "draw") {
                // remove event listeners from
                // write a message of a draw to a HTML element
                console.log("It's a draw.");
            } else {
                // remove event listeners from
                // write a message of the winner to a HTML element
                console.log('Player ' + board.getNextPlayer().symbol + ' wins');
            }
            board.printGameboard();
            board.drawGameboard();
        } else {
            console.log('Field already taken.');
        }
    });
}
