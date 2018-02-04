/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//the global score
var scores =[0,0];
//the round score
var roundScore = 0;
//the acive player, 0 represets the first player, 1 represents the second player
var activePlayer = 0;
// the dice number
var dice = 1;
var diceImage = document.querySelector(".dice");
var p1CurrentNumber = document.querySelector("#current-0");
var p2CurrentNumber = document.querySelector("#current-1");
var isPlaying = false;


//generate a random number from 1 to the max number
function generateDiceNumber(){
    return Math.floor(Math.random()*6+1)
}

function rollDice(){
    
    isPlaying = true;
    dice = generateDiceNumber();

    //display a dice in the screen based on the number
  
    switch (dice){
        case 1: diceImage.src = "dice-1.png";break;
        case 2: diceImage.src = "dice-2.png";break;
        case 3: diceImage.src = "dice-3.png";break;
        case 4: diceImage.src = "dice-4.png";break;
        case 5: diceImage.src = "dice-5.png";break;
        case 6: diceImage.src = "dice-6.png";break;
            
    } 
    diceImage.style.display = 'inline';
    if(dice === 1){
        resetTotalNumber();
        changePlayer();
    }else{
         //roundscore will be added by the new dice number
        roundScore = roundScore + dice;
        //change the current number of the active player
        getCurrentNumberLabel().textContent = roundScore;   
    }
   
}

function getCurrentNumberLabel(){
    var currentNumberLabel = document.querySelector("#current-"+activePlayer);
    return currentNumberLabel;
}

function getCurrentScoreLabel(){
     var currentScoreLabel = document.querySelector("#score-"+activePlayer);
    return currentScoreLabel;
}

function resetTotalNumber(){ 
        roundScore = 0;
         scores[activePlayer] = 0;
         getCurrentScoreLabel().textContent = scores[activePlayer]; 
        getCurrentNumberLabel().textContent = roundScore;
    
}

function changePlayer(){
    
        if(activePlayer === 0){
            activePlayer = 1;
        }else{
             activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle("active");
     document.querySelector('.player-1-panel').classList.toggle("active");
    
         diceImage.style.display = 'None';
    
}

function setTotalNumber(){
    scores[activePlayer] = scores[activePlayer] + roundScore;
    getCurrentScoreLabel().textContent = scores[activePlayer]; 
}

function hold(){
  // the total score of the activeplayer will be added by the current roundscore, the roundscroe will become 0 
  if(isPlaying){
      setTotalNumber();
      roundScore = 0;  
      if(scores[activePlayer]>=100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isPlaying=false;
      }else{
          getCurrentNumberLabel().textContent = 0;
          changePlayer();

      }
  }
}




document.querySelector(".btn-new").addEventListener('click',init);
document.querySelector(".btn-roll").addEventListener('click',rollDice);
document.querySelector(".btn-hold").addEventListener("click",hold);


function init(){
     //initialise the current number and total number of players on the webpage
   
    p1CurrentNumber.textContent = 0;
    p2CurrentNumber.textContent = 0;
    var p1Score = document.querySelector("#score-0").textContent = 0;
    var p2Score = document.querySelector("#score-1").textContent = 0;
    //hide the dice image
    diceImage.style.display = 'None';
}


