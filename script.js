const playerMoveFirst = Math.floor(Math.random() * 2);
const gameStatusPlayer1 = document.getElementById("gameStatusPlayer1");
const gameStatusPlayer2 = document.getElementById("gameStatusPlayer2");
const table = document.querySelector('table');
let currentPlayer;

function randomPlayerStart() {
    currentPlayer = playerMoveFirst + 1;
}

randomPlayerStart();

function makeMove(col) {
    for (let i = table.rows.length - 1; i >= 0; --i) {
        let cell = table.rows[i].cells[col];
        if (cell && cell.innerHTML == '' && gameStatusPlayer1.textContent == '' && gameStatusPlayer2.textContent == '') {
            if (currentPlayer == 1) {
                cell.classList.add('red-token');
                cell.innerHTML = ' ';
                currentPlayer = 2;
            } else if (currentPlayer == 2) {
                cell.classList.add('yellow-token');
                cell.innerHTML = '  ';
                currentPlayer = 1;
            }
            break;
        }
    }
    gameStatusPlayer1.classList.add('game-status');
    gameStatusPlayer2.classList.add('game-status');
    if (checkBoard() && currentPlayer == 2) {
        gameStatusPlayer1.textContent = "Winner!";
    } else if (checkBoard() && currentPlayer == 1) {
        gameStatusPlayer2.textContent = "Winner!";
    } else if (checkDraw()) {
        gameStatusPlayer1.textContent = "Draw";
        gameStatusPlayer2.textContent = "Draw";
    }
}

function checkCells(cells) {
    return cells.every(cell => cell.innerHTML != '' && cell.innerHTML == cells[0].innerHTML);
}

function checkBoard() {
    for (let i = 0; i < table.rows.length; ++i) {
        for (let j = 0; j <= table.rows[0].cells.length - 4; ++j) {
            let row = [];
            for (let k = 0; k < 4; k++) {
                row.push(table.rows[i].cells[j + k]);
            }
            if (checkCells(row)) {
                return true;
            }
        }
    }
    for (let i = 0; i < table.rows[0].cells.length; ++i) {
        for (let j = 0; j <= table.rows.length - 4; ++j) {
            let col = [];
            for (let k = 0; k < 4; k++) {
                col.push(table.rows[j + k].cells[i]);
            }
            if (checkCells(col)) {
                return true;
            }
        }
    }
    for (let i = 0; i <= table.rows.length - 4; i++) {
        for (let j = 0; j <= table.rows[0].cells.length - 4; j++) {
            let diag1 = [];
            let diag2 = [];
            for (let k = 0; k < 4; k++) {
                diag1.push(table.rows[i + k].cells[j + k]);
                diag2.push(table.rows[i + k].cells[j + 3 - k]);
            }
            if (checkCells(diag1) || checkCells(diag2)) {
                return true;
            }
        }
    }
    return false;
}

function checkDraw() {
    for (let i = 0; i < table.rows.length; ++i) {
        for (let j = 0; j <= table.rows.length; ++j) {
            if (table.rows[i].cells[j].innerHTML == '') {
                return false; 
            }
        }
    }
    return true; 
}

function restart() {
    for (let i = 0; i < table.rows.length; ++i) {
        for (let j = 0; j <= table.rows.length; ++j) {
            let cell = table.rows[i].cells[j];
            cell.innerHTML = '';
            cell.classList.remove('red-token', 'yellow-token');
        }
    }
    gameStatusPlayer1.textContent = '';
    gameStatusPlayer2.textContent = '';
}