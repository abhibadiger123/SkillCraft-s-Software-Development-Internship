function createBoard() {

    const board = document.getElementById("sudoku-board");

    board.innerHTML = "";

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            const input = document.createElement("input");

            input.type = "text";
            input.maxLength = 1;

            input.dataset.row = row;
            input.dataset.col = col;

            input.addEventListener("input", function () {

                if (!/^[1-9]?$/.test(this.value)) {
                    this.value = "";
                }

            });

            input.addEventListener("keydown", function (e) {

                let r = parseInt(this.dataset.row);
                let c = parseInt(this.dataset.col);

                switch (e.key) {

                    case "ArrowUp":
                        r--;
                        break;

                    case "ArrowDown":
                        r++;
                        break;

                    case "ArrowLeft":
                        c--;
                        break;

                    case "ArrowRight":
                        c++;
                        break;

                    default:
                        return;
                }

                e.preventDefault();

                if (r >= 0 && r < 9 && c >= 0 && c < 9) {

                    const nextCell = document.querySelector(
                        `#sudoku-board input[data-row="${r}"][data-col="${c}"]`
                    );

                    if (nextCell) nextCell.focus();
                }

            });

            board.appendChild(input);
        }
    }
}

createBoard();

function getBoard() {

    const cells = document.querySelectorAll("#sudoku-board input");

    let board = [];

    for (let row = 0; row < 9; row++) {

        board[row] = [];

        for (let col = 0; col < 9; col++) {

            const value = cells[row * 9 + col].value;

            board[row][col] = value === "" ? 0 : parseInt(value);
        }
    }

    return board;
}

function displayBoard(board) {

    const cells = document.querySelectorAll("#sudoku-board input");

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            cells[row * 9 + col].value =
                board[row][col] === 0 ? "" : board[row][col];
        }
    }
}

function isValid(board, row, col, num) {

    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num) return false;
    }

    for (let x = 0; x < 9; x++) {
        if (board[x][col] === num) return false;
    }

    let startRow = row - row % 3;
    let startCol = col - col % 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) {
                return false;
            }
        }
    }

    return true;
}

function findEmpty(board) {

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                return [row, col];
            }
        }
    }

    return null;
}

function solveSudoku(board) {

    let emptyCell = findEmpty(board);

    if (!emptyCell) return true;

    let [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {

        if (isValid(board, row, col, num)) {

            board[row][col] = num;

            if (solveSudoku(board)) return true;

            board[row][col] = 0;
        }
    }

    return false;
}

function solveSudokuBoard() {

    let board = getBoard();

    const status = document.getElementById("status");
    const message = document.getElementById("message");

    status.innerHTML = "Solving...";

    setTimeout(() => {

        if (solveSudoku(board)) {

            displayBoard(board);

            status.innerHTML = "Solved ✅";
            message.innerHTML = "Sudoku solved successfully!";
            message.style.color = "green";

        } else {

            status.innerHTML = "Invalid ❌";
            message.innerHTML = "No solution exists for this puzzle.";
            message.style.color = "red";
        }

    }, 300);
}

function clearBoard() {

    document.querySelectorAll("#sudoku-board input")
        .forEach(cell => cell.value = "");

    document.getElementById("status").innerHTML = "Ready";
    document.getElementById("message").innerHTML = "";
}

function loadSamplePuzzle() {

    const samplePuzzle = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];

    displayBoard(samplePuzzle);

    document.getElementById("status").innerHTML = "Sample Loaded";
    document.getElementById("message").innerHTML = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}