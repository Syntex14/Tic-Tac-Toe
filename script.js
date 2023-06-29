// UI 
// 1. Click Square
// 2. Display X or O
// 3. Click Restart Button
// 4. Display username


// Internal Logic
// 1. Store position of click, X or O in Gameboard inside array
// 2. Internal check to see if :
    // a. whether or not an X or O have already placed in position
    // b. whether or not a 3 in a row exists
    // c. whether or not a tie exists
// 3. Internal logic to completely restart board and clear array function
// 4. Internal logic to store username and display it

function Gameboard() {
    const gameBoard = [];

    for(i = 0; i < 3; i++) {
        gameBoard[i] = [];
            for(j = 0; j < 3; j++) {
                gameBoard[i].push("-"); // will have to update .push with .push(Tic-box());
            }
    }
    console.log(gameBoard);

    const getBoard = () => gameBoard;

    const placeXO = (row, column, player) => {
        gameBoard[row][column].addXO(player);
        // this will have to be edited, but the general idea exists
    }

    return {
        getBoard,
        placeXO
    };
    
}

function Ticbox() {
    let ticBoxValue = "";

    const addXO = (player) => {
        ticBoxValue = player;
    }

    const checkPosition = () => ticBoxValue;

    return {
        addXO,
        checkPosition
    };
}

