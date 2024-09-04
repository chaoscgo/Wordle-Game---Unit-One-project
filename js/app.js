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

const messageEl = document.querySelector('#message');
// const resetBtnEl = document.querySelector('#reset');

/*-------------- Functions -------------*/
// initialize() => {
    // let solution = '';
    let inputBoardRow1 = [];
    let clicks = 0;
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
console.log(solution);

const compareSolution = (solution, playerWord) => {
    console.log(solution, playerWord);

    if (solution === playerWord) {
        messageEl.textContent = 'You win!!';
    } else if (solution !== playerWord) {
        messageEl.textContent = 'Try Again!';
    }
    console.log(messageEl.textContent);
}


const joinLetters = (inputBoardRow1, clicks) => {
    if (clicks === 5) {
        const playerWord = inputBoardRow1.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    }
}

const placeLetter = (content, clicks) => {
        inputBoardRow1.push(content);
        boardRowEls[clicks-1].textContent = content;
        // console.log(inputBoardRow1);
        joinLetters(inputBoardRow1, clicks);
        // render();
    }




const handleClick = (event) => {
    clicks = clicks + 1;
    let keyContent = event.target.innerText;
    // console.log(keyContent);
    // console.log(clicks);
    placeLetter(keyContent, clicks);
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
    key.addEventListener('click', handleClick) 
});


// resetBtnEl.addEventListener('click', reset)