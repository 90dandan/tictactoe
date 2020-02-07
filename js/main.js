/*------Constants------*/
       
/*-----Variables (state)------*/

let board, turn, winner;

/*------Cached Element References------*/

/*------Event Listeners------*/

document.getElementById('squares').addEventListener('click', onClick);

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
        if (board[squareIdx] !== null) return;
        else if (turn===1) { 
            board[squareIdx]=turn;
            document.getElementById(event.target.id).innerHTML = "X"; 
            document.getElementById("message").innerHTML = "O's Turn!"; 
            togglePlayer(); 
            isWinner();
        } else if(turn===-1){ 
            board[squareIdx]=turn;
            document.getElementById(event.target.id).innerHTML = "O";
            document.getElementById("message").innerHTML = "X's Turn!";
            togglePlayer();
            isWinner();
        }
    }
}

function togglePlayer() {
    if (winner===false){
        turn *= -1;
    }
}

function isWinner() {
    if (board[0]+board[1]+board[2] === 3 || 
        board[0]+board[4]+board[8] === 3 || 
        board[0]+board[3]+board[6] === 3 || 
        board[1]+board[4]+board[7] === 3 ||
        board[2]+board[4]+board[6] === 3 || 
        board[2]+board[5]+board[8] === 3 || 
        board[6]+board[7]+board[8] === 3 || 
        board[3]+board[4]+board[5] === 3){
        winner = true; 
        document.getElementById("message").innerHTML = "Player One Wins!!";
    } else if(board[0]+board[1]+board[2] === -3 || 
            board[0]+board[4]+board[8] === -3 || 
            board[0]+board[3]+board[6] === -3 ||
            board[1]+board[4]+board[7] === -3 || 
            board[2]+board[4]+board[6] === -3 || 
            board[2]+board[5]+board[8] === -3 || 
            board[6]+board[7]+board[8] === -3 || 
            board[3]+board[4]+board[5] === -3){
        winner = true;
        document.getElementById("message").innerHTML = "Player Two Wins!!";
    }  
} 