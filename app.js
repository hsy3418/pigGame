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
var diceImage = document.getElementsByClassName("dice");

//generate a random number from 1 to the max number
function generateDiceNumber(){
    return Math.floor(Math.random()*6+1)
}

function rollDice(){
    dice = generateDiceNumber();
    //display a dice in the screen based on the number
    console.log(dice);
    switch (dice){
        case 1: diceImage.src = 'dice-1.png';break;
        case 2: diceImage.src = 'dice-2.png';break;
        case 3: diceImage.src = 'dice-3.png';break;
        case 4: diceImage.src = 'dice-4.png';break;
        case 5: diceImage.src = 'dice-5.png';break;
        case 6: diceImage.src = 'dice-6.png';break;
            
    }
    //roundscore will be added by the new dice number
    roundScore = roundScore+dice;
    
}

function hold(){
  // the total score of the activeplayer will be added by the current roundscore, the roundscroe will become 0    
  scores[activePlayer] = scores[activePlayer] + roundScore;
  roundScore = 0;    
}

function startGame(){
    //initialise the current number and total number of players on the webpage
    
    
    
    //如果click roll dice
    rollDice();
    
    //如果click hold
    hold();
    
    if(dice===1){
        if(activePlayer === 0){
            activePlayer = 1;
        }else{
             activePlayer = 0;
        }
        
    }
    
}