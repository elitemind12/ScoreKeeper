//Refactoring
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const reset = {
    button: document.querySelector('#reset')
}


const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
});

reset.button.addEventListener('click', () => {
    Reset(p1,p2);
});

winningScoreSelect.addEventListener('change', function () {
         winningScore = parseInt(this.value);
         Reset(p1,p2);
     });

function Reset(player, opponent) {
    isGameOver = false;
    player.score = 0;
    opponent.score = 0;
    opponent.display.textContent = 0;
    player.display.textContent = 0;
    player.display.classList.remove('has-text-danger', 'has-text-success');
    opponent.display.classList.remove('has-text-success', 'has-text-danger');
    player.button.disabled = false;
    opponent.button.disabled = false;
}
// basic or original logic

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const winningScoreSelect = document.querySelector('#playto');


// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;
// p1Button.addEventListener('click', () => {
//     if(!isGameOver){
//         p1Score += 1;
//         if(p1Score === winningScore){
//             isGameOver = true;
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// });

// p2Button.addEventListener('click', () => {
//     if(!isGameOver){
//         p2Score += 1;
//         if(p2Score === winningScore){
//             isGameOver = true;
//             p1Display.classList.add('has-text-danger');
//             p2Display.classList.add('has-text-success');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// });

// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p2Display.textContent = 0;
//     p1Display.textContent = 0;
//     p1Display.classList.remove('has-text-danger', 'has-text-success');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }