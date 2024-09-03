console.log('Hello World!');

/*-------------- Constants -------------*/
const computerChoice = ['APPLE', 'BACON', 'STRIP'];
const maxBoardRows = 6;

/*---------- Variables (state) ---------*/
let solution;
let board;
let solLetters;
let playerLetters;
let playerWord;
let win;

/*----- Cached Element References  -----*/
const keyboardEls = document.querySelectorAll('.key', '#id');
console.dir(keyboardEls);

const boardRowEls = document.querySelectorAll('.sqr');
console.dir(boardRowEls);

// const messageEl = document.querySelector('#message');
// const resetBtnEl = document.querySelector('#reset');

/*-------------- Functions -------------*/
// initialize() => {
//     let solution = '';
    let inputBoardRow1 = [];
//     let solLetters = [];
//     let playerLetters = [];
//     let playerWord = '';
//     let win = false;
//     let lose = numBoardRows > MAX_BOARD_ROWS;
//     render();
// }

// initialize();

const computerChoose = () => {
    return solution = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

computerChoose();
// console.log(solution);

const placeLetter = (index) => {
    inputBoardRow1.push(index);
    boardRowEls[0].textContent = index;
    console.log(inputBoardRow1);
    // render();
}

// const updateBoard = () => {
//     board.forEach((square, idx) =>  {     
//         if (square === 'X') {
//         squareEls[idx].textContent = 'X'
//     } else if (square === 'O') {
//         squareEls[idx].textContent = 'O'
//     } else {
//         squareEls[idx].textContent = ''
//     }
//     // console.log(board);
// });
// }

const handleClick = (event) => {
    const keyIndex = event.target.innerText;
    console.log(keyIndex);
    placeLetter(keyIndex);
    // render();
}

// const updateBoardRow = () => {
//     boardRow1.forEach((key,idx) => {
//         sqr[idx].textContent = keyEl[idx].textContent;
//         render();
//     })    
//     }


// /*----------- Event Listeners ----------*/

keyboardEls.forEach((key) => {
    key.addEventListener('click', handleClick, {once: true}) 
  });


// resetBtnEl.addEventListener('click', reset)