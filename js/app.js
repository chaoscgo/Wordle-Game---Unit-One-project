/*-------------- Constants -------------*/
const computerChoice = ['APPLE', 'BACON', 'STRIP'];
const MAX_BOARD_ROWS = 6;

/*---------- Variables (state) ---------*/
let solution;
let board;
let solLetters;
let playerLetters;
let playerWord;
let win;

/*----- Cached Element References  -----*/
// const keyboardEls = document.querySelectorAll('key');
// const messageEl = documennt.querySelector('#message');
// const resetBtnEl = document.querySelector('#reset');

/*-------------- Functions -------------*/
// initialize() => {
//     let solution = '';
//     let boardRow = '';
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
    boardRow[index] = keyIndex.textContent;
    render();
}

const handleClick = (event) => {
    const keyIndex = event.target.id;
    placeLetter(keyIndex);
    render();
}

const updateBoardRow = () => {
    boardRow1.forEach((key,idx) => {
        sqr[idx].textContent = keyEl[idx].textContent;
        render();
    })    
    }


/*----------- Event Listeners ----------*/

// keyboardEls.forEach(key) => {
//     key.addEventListener('click', handleClick);
// }

// resetBtnEl.addEventListener('click', reset);