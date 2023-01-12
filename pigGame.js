'use strict'

const player0 = document.getElementById('player-0');
const player1 = document.getElementById('player-1');

const score0 = document.getElementById('score0');
score0.textContent = 0;
const score1 = document.getElementById('score1');
score1.textContent = 0;

const currentScore0 = document.getElementById('current-score0');
const currentScore1 = document.getElementById('current-score1');

document.getElementById('dice').innerHTML = '?'

const btnNew = document.getElementById('new-game');
const btnRollDice = document.getElementById('roll-dice');
const btnHold = document.getElementById('hold');

let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];  //big scores
let playing = true;

btnRollDice.addEventListener('click' , function(){
    if(playing){
    //random number by rolling dice
    const num = Math.trunc(Math.random()*6)+1;
    // console.log(num)

    //displaying dice number in dice
    document.getElementById('dice').innerHTML = num

    //check for rolled 1
    if(num !== 1){
        //add to current score
        currentScore += num;
        document.getElementById(`current-score${activePlayer}`).textContent = currentScore
    }
    else{
        //switch to next player
        currentScore = 0;
        document.getElementById(`current-score${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1:0;   // condition ? true : false ;
        player0.classList.toggle('active');
        player1.classList.toggle('active');



    }

}  
    
   
})

// hold button

btnHold.addEventListener('click',function(){
    if(playing){
    scores[activePlayer]+=currentScore
    document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
   
    //check score for 100
    if(scores[activePlayer]>=20){
        playing = false
        document.getElementById(`player-${activePlayer}`).classList.add('winner')
        document.getElementById(`win${activePlayer}`).textContent="WINNER 🎉"
    }

else{

    //switch player
    currentScore = 0;
    document.getElementById(`current-score${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1:0;   // condition ? true : false ;
    player0.classList.toggle('active');
    player1.classList.toggle('active');
}  
}})

//New Game

btnNew.addEventListener('click' ,function(){
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore = 0;
    currentScore0.innerHTML = 0;
    currentScore1.innerHTML = 0;
    document.getElementById(`player-${activePlayer}`).classList.remove('winner')
    document.getElementById(`win${activePlayer}`).textContent=""

    activePlayer = 0;
    const scores = [0,0]; 
    document.getElementById('dice').textContent = "?"
    player0.classList.add('active');
    player1.classList.remove('active');
    
})