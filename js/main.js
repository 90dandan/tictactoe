/*------Constants------*/
const colors = null;
const players = {
    '1': {
        name: 'X',
        //img: ,
        score: 0,
        turn: false,
    },
    '-1': {
        name: 'O',
        //img: ,
        score: 0,
        turn: true,
    }
}

//const cellEl = document.querySelectorAll('section.board')

/*------Variables (state)------*/

// Variables might include (board/turn/winner)
let board, togglePlayer, winner; 
let playerTurn = false; 
/*------Cached Element References------*/

// You might choose to put your game status here


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
document.querySelectorById("squares").addEventListener('click', onClick);
//event.target.id
/*------Functions------*/

function init() {
//    board = ['null','null','null','null','null','null','null','null','null',]
//    turn = false;
//     
//}
  
  function onClick(event) {
//   register which player (1,-1) played and assign a value according 
//   var idx = parseInt(evt.target.id.replace('sq', ''));   replaces where the player clicks with X or O 
//}

function isWinner() {
   // if ['sq0' + 'sq1' + 'sq2' = 3 || 'sq0' + 'sq4' + 'sq8' = 3 || 'sq0' + 'sq3' + 'sq6' = 3 || 'sq2' + 'sq4' + 'sq6' = 3 || 'sq2' + 'sq5' + 'sq8' = 3 || 'sq6' + 'sq7' + 'sq8' = 3 || 'sq3' + 'sq4' + 'sq5' = 3]
   //winner = '1' message
    // } else ['sq0' + 'sq1' + 'sq2' = -3 || 'sq0' + 'sq4' + 'sq8' = -3 || 'sq0' + 'sq3' + 'sq6' = -3 || 'sq2' + 'sq4' + 'sq6' = -3 || 'sq2' + 'sq5' + 'sq8' = -3 || 'sq6' + 'sq7' + 'sq8' = -3 || 'sq3' + 'sq4' + 'sq5' = -3]
    //winner = '-1' message
    //} 
//} render: togglePlayer


function togglePlayer(event) {
    // if turn 
    // 
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

