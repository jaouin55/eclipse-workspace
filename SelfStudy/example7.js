//사용변수
let score = 0;
let time = 9;
let isPlaying = false;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');
const score = document.querySelector(".score");
const time = document.querySelector(".time");

wordInput.addEventListener("input" , () => {

    if(wordInput.value.tolowerCase()===wordDisplay.innerTex.tolowerCase()) {
        score++;
        scoreDisplay.innerText = score;
        wordInput.value="";
    }

})

setInterval(countDown,1000);
buttonChange('게임시작');


function countDown(){
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
    text ==='게임시작' ? button.classList.remove("loading") : button.classList.add("loading")
}