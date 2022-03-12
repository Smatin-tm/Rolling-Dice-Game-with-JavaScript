'use strict';


// Selecting Elements
let player0El = document.querySelector('.player--0')
let player1El = document.querySelector('.player--1')

let score0El = document.getElementById('score--0'); 
let score1El = document.getElementById('score--1'); 
let current0El= document.getElementById('current--0'); 
let current1El= document.getElementById('current--1'); 

let diceEl = document.querySelector('.dice');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore =0;
let activePlayer =0;

//Rolling dice functionlity
btnRoll.addEventListener('click', ()=>{
    // 1. Generating random dice roll
    let dice = Math.trunc(Math.random()*6)+1;
    console.log(dice)

    // 2. Displaying The Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Checking for rolled 1 
    if(dice !==1){
    // Adding dice to the current Score
    currentScore= currentScore +dice; // or currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent= currentScore;
    
    }
    else{
        // Swiching players
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0 ? 1 :0;
        currentScore=0;

        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
    }
})

// hold button functionality
btnHold.addEventListener('click', ()=>{
    // 1. add score to the active player's active
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];

    // 2. check th playes's score is >= 100
    if (scores[activePlayer]>=100){
    // 3. finish the game
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceEl.classList.add('hidden');
    
    // dont allow to click
    btnRoll.style.cursor= 'not-allowed';
    btnHold.style.cursor= 'not-allowed';
    }
    else{
    // 4. swith the game
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 :0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentScore=0;

    }

    
})

btnNew.addEventListener('click', ()=>{
    score0El.textContent =0;
    score1El.textContent =0;

    current0El.textContent=0;
    current1El.textContent=0;


    btnRoll.style.cursor= 'pointer';
    btnHold.style.cursor= 'pointer';

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    

})
