import Gameboard from './tictactoe/Gameboard.js';

let board = new Gameboard();
let fields = document.querySelector('#gameboard').children

function respondToClick(e) {
    if (board.setFieldValue(e.target.id)) {
        let gameStatus = board.checkWin()
        if (gameStatus === '') {
            board.setNextPlayer();
        } else if (gameStatus === "draw") {
            disableEvents(fields);
            // write a message of a draw to a HTML element
            console.log("It's a draw.");
        } else {
            disableEvents(fields);
            // write a message of the winner to a HTML element
            console.log('Player ' + board.getNextPlayer().symbol + ' wins');
        }
        board.drawGameboard();
    } else {
        console.log('Field already taken.');
    }
}


function disableEvents(fields) {
    for (let i = 0; i < fields.length; i++) {
        fields.item(i).removeEventListener('click', respondToClick);
    }
}

for (let i = 0; i < fields.length; i++) {
    fields.item(i).addEventListener('click', respondToClick);
}
