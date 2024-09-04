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
    let inputBoardRow2 = [];
    let inputBoardRow3 = [];
    let inputBoardRow4 = [];
    let inputBoardRow5 = [];
    let inputBoardRow6 = [];
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
    } else if (solution !== playerWord && clicks < 30) {
        messageEl.textContent = 'Try Again!';
    } else if (solution !== playerWord && clicks === 30) {
        messageEl.textContent = 'You lose!';
}
console.log(messageEl.textContent);
    }
 
 



const joinLetters = (inputBoardRow1, clicks) => {
    if (clicks === 5) {
        const playerWord = inputBoardRow1.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    } else if (clicks === 10) {
        const playerWord = inputBoardRow2.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    } else if (clicks === 15) {
        const playerWord = inputBoardRow3.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    } else if (clicks === 20) {
        const playerWord = inputBoardRow4.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    } else if (clicks === 25) {
        const playerWord = inputBoardRow5.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    } else if (clicks === 30) {
        const playerWord = inputBoardRow6.join('');
       // console.log(playerWord);
        compareSolution(solution, playerWord);
    }
}

const placeLetter = (content, clicks) => {
        if (clicks < 6) {
        inputBoardRow1.push(content);
        boardRowEls[clicks-1].textContent = content;
        // console.log(inputBoardRow1);
        joinLetters(inputBoardRow1, clicks);
        } else if (clicks > 5 && clicks < 11) {
            inputBoardRow2.push(content);
            boardRowEls[clicks-1].textContent = content;
            joinLetters(inputBoardRow2, clicks);
        } else if (clicks > 10 && clicks < 16) {
            inputBoardRow3.push(content);
            boardRowEls[clicks-1].textContent = content;
            joinLetters(inputBoardRow3, clicks);
        } else if (clicks > 15 && clicks < 21) {
            inputBoardRow4.push(content);
            boardRowEls[clicks-1].textContent = content;
            joinLetters(inputBoardRow4, clicks);
        } else if (clicks > 20 && clicks < 26) {
            inputBoardRow5.push(content);
            boardRowEls[clicks-1].textContent = content;
            joinLetters(inputBoardRow5, clicks);
        } else if (clicks > 25 && clicks < 31) {
            inputBoardRow6.push(content);
            boardRowEls[clicks-1].textContent = content;
            joinLetters(inputBoardRow6, clicks);
    }
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