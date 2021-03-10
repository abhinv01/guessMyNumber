'use strict';

/******************Declarations**********************/
let magicNumber = Math.trunc(Math.random() *20) + 1;                    //created a magic number betwn 1 to 20
const secretNumber = document.querySelector('.number');                    //for time being making
secretNumber.textContent = magicNumber;                                     //random number visible

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const userMessage = document.querySelector('.message');
const gameScore = document.querySelector('.score');
const gameHighScore  = document.querySelector('.highscore');
let score = 20
let highscore = 0
gameScore.textContent = score;
gameHighScore.textContent = 0;


/************Functions**************/

function check()
{
    const guess = Number(document.querySelector('.guess').value);

    if(guess>0 && guess<21)
    {
        if (score > 0)
        {    
            if(guess === magicNumber)
            {
                userMessage.textContent = 'You are correct';
                secretNumber.textContent = magicNumber;                                    
                document.querySelector('body').style.backgroundColor = 'rgb(96,179,17)';
                secretNumber.style.width = "30rem";
                if (gameScore.textContent > gameHighScore.textContent)      //If current score is greater than highscore then update it
                {
                     gameHighScore.textContent = score;
                }
             }
            else if(guess>magicNumber)
            {
                userMessage.textContent = "You are to high...";
                score--;
                gameScore.textContent = score;

            }
            else if(guess<magicNumber)
            {
                userMessage.textContent = "You are to low...";
                score--;
                gameScore.textContent = score;
            }
        }
        else
        {
            document.querySelector('body').style.backgroundColor = 'red';
            userMessage.textContent = "You are out of chances...";  
            secretNumber.style.width = '30rem';
        }
    }
    else
    {
        userMessage.textContent = "Type number in range from 1 to 20...";  
    }
}

function again()
{
    score = 20;
    gameScore.textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(34,34,34)';
    secretNumber.style.width = '15rem';
    userMessage.textContent = 'Start Guessing...'
    magicNumber = Math.trunc(Math.random() *20) + 1; 
    secretNumber.textContent = '?';                                     
    document.querySelector('.guess').value = "";
}

/*******************Events************************** */

btnCheck.addEventListener('click' , check)
btnAgain.addEventListener('click', again)