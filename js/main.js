import Gameboard from './tictactoe/Gameboard.js';

let board = new Gameboard();
let fields = document.querySelector('#gameboard').children
let messageField = document.getElementById('message')
let resetButton = document.getElementById('reset')

resetButton.addEventListener('click', () => board.initGameboard());

function respondToClick(e) {
    if (board.setFieldValue(e.target.id)) {
        let gameStatus = board.checkWin()
        if (gameStatus === '') {
            board.setNextPlayer();
        } else if (gameStatus === "draw") {
            disableEvents(fields);
            messageField.innerText = "It's a draw.";
        } else {
            disableEvents(fields);
            messageField.innerText = `Player ${board.getNextPlayer().symbol} wins`;
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
