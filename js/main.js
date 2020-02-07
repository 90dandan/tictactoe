/*------Constants------*/
       


/*-----Variables (state)------*/

// Variables might include (board/turn/winner)
//let gameMarker = "X";
//let board = document.querySelectorAll('.board');
let board, turn = 1; 
winner = false;

/*------Cached Element References------*/

// You might choose to put your game status here


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('squares').addEventListener('click', onClick);
//document.getElementById("rst").addEventListener('click', init);
/*------Functions------*/

init();

function init() {
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    document.getElementById("message").innerHTML = "X's Turn!";
    winner=false;
}

function onClick(event) {
    if (winner===false) {
    let squareIdx = parseInt((event.target.id).replace("sq",""));
    console.log(board);
    if (board[squareIdx] !== null) return;
    else if (turn===1) { 
        board[squareIdx]=turn;
        document.getElementById(event.target.id).innerHTML = "X"; 
        document.getElementById("message").innerHTML = "O's Turn!"; 
        togglePlayer(); 
    } else if(turn===-1){ 
        board[squareIdx]=turn;
        document.getElementById(event.target.id).innerHTML = "O";
        document.getElementById("message").innerHTML = "X's Turn!";
        togglePlayer();
    }
    }
}

function togglePlayer() {
    if (winner===false){
    isWinner();
    turn *= -1;
    console.log('turn');
    }
}

function isWinner() {
    if (board[0]+board[1]+board[2] === 3 || 
        board[0]+board[4]+board[8] === 3 || 
        board[0]+board[3]+board[6] === 3 || 
        board[2]+board[4]+board[6] === 3 || 
        board[2]+board[5]+board[8] === 3 || 
        board[6]+board[7]+board[8] === 3 || 
        board[3]+board[4]+board[5] === 3)
    {
        winner = true; 
        document.getElementById("message").innerHtml = "Player One Wins!!"; 
        console.log("win")
    } else if(board[0]+board[1]+board[2] === -3 || 
            board[0]+board[4]+board[8] === -3 || 
            board[0]+board[3]+board[6] === -3 || 
            board[2]+board[4]+board[6] === -3 || 
            board[2]+board[5]+board[8] === -3 || 
            board[6]+board[7]+board[8] === -3 || 
            board[3]+board[4]+board[5] === -3)
    {
        winner = true;
        document.getElementById("message").innerHtml = "Player Two Wins!!";
        console.log('win')
    }  //console.log('isWinner')
} 




//function placeMark(event) {

//function reset() {
    //let board=document.getElementsByClassName("board");
//for (var i=0; i<board.length; i++) {
//board[i].innerHTML = "";
//}
//}
    
//function changeToX() {
//when (gameMarker === "X") {
//gameMarker = "Y"} 
//}
//function changeToO() {
//  gameMarker = "O";   
//}

//function placeMark(myDiv) {
//    document.getElementById(myDiv).innerText = gameMarker;
//}

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

