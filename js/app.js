/*-------------- Constants -------------*/
const computerChoices = ["APPLE", "BLAST", "CRANE", "DRIFT", "EAGLE", "FLAME", "GRAPE", "HURRY", "ANKLE", "JELLO",
    "KNOCK", "LEMON", "MAGIC", "NINJA", "OASIS", "PLANT", "QUEEN", "ROBOT", "SHORE", "TANGO",
    "URBAN", "VIVID", "WALTZ", "NYLON", "YACHT", "ZEBRA", "ALERT", "BRAVE", "CRISP", "DREAM",
    "EAGER", "FROST", "GLINT", "HOPE", "IVORY", "JUMPY", "KNIFE", "LATCH", "MIRTH", "NEXUS",
    "ONION", "PIZZA", "QUICK", "REACT", "SLICK", "TRICK", "ULTRA", "VISTA", "WHEAT", "XENON",
    "YOUTH", "ZESTY", "AFTER", "BLOOM", "CLEAR", "DENSE", "ENJOY", "FABLE", "GLOWY", "HAPPY",
    "INLET", "JOKER", "KRAFT", "LEAVE", "MOUSE", "NINNY", "OUTER", "PLUMB", "QUIET", "RACER",
    "SUGAR", "TIGER", "UNITY", "VOTER", "WHALE", "MADLY", "YIELD", "ZESTY", "ARISE", "BELOW",
    "CHAIR", "DRIVE", "ELECT", "FABLE", "GRIND", "HURRY", "JOKES", "CHOIR", "LUNAR", "MAGIC"];

/*---------- Variables (state) ---------*/
let solution;
let playerWord;
let inputBoardRow1;
let inputBoardRow2;
let inputBoardRow3;
let inputBoardRow4;
let inputBoardRow5;
let inputBoardRow6;
let clicks;
let compLetters;

/*----- Cached Element References  -----*/
const keyboardEls = document.querySelectorAll('.key', '#id');

const boardRowEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');

const resetBtnEl = document.querySelector('#resetButton');

/*-------------- Functions -------------*/

const compChoiceLetters = (solution) => {
    return compLetters = solution.split('');
}

const computerChoose = () => {
    return solution = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

const updateBoard = () => {
    inputBoardRow1 = ['','','','',''];
    inputBoardRow2 = ['','','','',''];
    inputBoardRow3 = ['','','','',''];
    inputBoardRow4 = ['','','','',''];
    inputBoardRow5 = ['','','','',''];
    inputBoardRow6 = ['','','','',''];
    for (let i=0; i< 30; i++) {
        boardRowEls[i].textContent = '';
        boardRowEls[i].classList.remove('green');
        boardRowEls[i].classList.remove('peach');
    };
    clicks = 0;
 }

const updateMessage = () => {
    messageEl.textContent = 'GOOD LUCK!!';
}

const render = () => {
    computerChoose();
    compChoiceLetters(solution);
    updateBoard();
    updateMessage();
}

const init = () => {
    inputBoardRow1 = [];
    inputBoardRow2 = [];
    inputBoardRow3 = [];
    inputBoardRow4 = [];
    inputBoardRow5 = [];
    inputBoardRow6 = [];
    clicks = 0;
    compLetters = [];
    playerWord = '';
    messageEl.textContent = '';
    resetBtnEl.classList.add('hidden');
    render();
}

init();

const compareSolution = (solution, playerWord) => {
    if (solution === playerWord) {
        messageEl.textContent = 'You win!!';
        resetBtnEl.classList.remove('hidden');
    } else if (solution !== playerWord && clicks < 30) {
        messageEl.textContent = 'Try Again!';
    } else if (solution !== playerWord && clicks === 30) {
        messageEl.textContent = 'You lose!';
        resetBtnEl.classList.remove('hidden');
    }
}

const compareLetters = (keyContent, clicks) => {
    if (clicks > 0 && clicks < 6) {
        clicksAdj = clicks;
    } else if (clicks > 5 && clicks < 11) {
        clicksAdj = clicks-5;
    } else if (clicks > 10 && clicks < 16) {
        clicksAdj = clicks-10;
    } else if (clicks > 15 && clicks < 21) {
        clicksAdj = clicks-15;
    } else if (clicks > 20 && clicks < 26) {
        clicksAdj = clicks-20;
    } else if (clicks > 25 && clicks < 31) {
        clicksAdj = clicks-25;
    }

    if (keyContent === compLetters[clicksAdj-1]) {
        boardRowEls[clicks-1].classList.add('green');
    } else if (keyContent !== compLetters[clicksAdj-1] && compLetters.includes(keyContent)) {
        boardRowEls[clicks-1].classList.add('peach');
    }
}
 
const joinLetters = (inputBoardRow1, clicks) => {
    if (clicks === 5) {
        const playerWord = inputBoardRow1.join('');
        compareSolution(solution, playerWord);
    } else if (clicks === 10) {
        const playerWord = inputBoardRow2.join('');
        compareSolution(solution, playerWord);
    } else if (clicks === 15) {
        const playerWord = inputBoardRow3.join('');
        compareSolution(solution, playerWord);
    } else if (clicks === 20) {
        const playerWord = inputBoardRow4.join('');
        compareSolution(solution, playerWord);
    } else if (clicks === 25) {
        const playerWord = inputBoardRow5.join('');
        compareSolution(solution, playerWord);
    } else if (clicks === 30) {
        const playerWord = inputBoardRow6.join('');
        compareSolution(solution, playerWord);
    }
}

const placeLetter = (content, clicks) => {
    if (clicks < 6) {
        inputBoardRow1.push(content);
        boardRowEls[clicks-1].textContent = content;
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
    placeLetter(keyContent, clicks);
    compareLetters(keyContent, clicks);
}

// /*----------- Event Listeners ----------*/

keyboardEls.forEach((key) => {
    key.addEventListener('click', handleClick) 
});

resetBtnEl.addEventListener('click', init)
