import Gameboard from './tictactoe/Gameboard.js';

let board = new Gameboard();
let fields = document.querySelector('#gameboard').children

for (let i = 0; i < fields.length; i++) {
    fields.item(i).addEventListener('click', e => {
        if (board.setFieldValue(e.target.id)) {
            //board.checkWin();
            board.setNextPlayer();
            board.printGameboard();
            board.drawGameboard();
        } else {
            console.log('Field already taken.');
        }
    });
}
