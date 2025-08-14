let randomNumber;


let form=document.querySelector('.form')
let result=document.querySelector('.result')
let guessRemaining=document.querySelector('.guessRemaining')
let previous=document.querySelector('.previousGuess')
let popUpDiv=document.querySelector('.pop-up-area')
let finishMsg=document.querySelector('.pop-up-area-p')
let restartButton=document.querySelector('.pop-up-area-button')


let currentGuessesRemaining=10

function addAndDisplayPreviousGuess(value){
    previous.innerHTML+=`${value}, `
}
function displayCurrentGuessesRemaining(){
    guessRemaining.innerHTML=`Guesses Remaining: ${currentGuessesRemaining}`
}

function randomNumberGenerator(){
    randomNumber=parseInt(Math.random()*100+1);
    console.log(randomNumber)
}

function restartGameFunction(){
    randomNumberGenerator()
    finishMsg.innerHTML=''
    popUpDiv.classList.remove('visible')
    currentGuessesRemaining=10
    displayCurrentGuessesRemaining()
    previous.innerHTML='Previous Guesses:'
    document.querySelector('#guessBox').value=''
}


function finishGame(isGameWon){
    popUpDiv.classList.add('visible')
    if(isGameWon){
        finishMsg.style.color='green'
        finishMsg.innerHTML="<p>CONGRATULATION, YOU HAVE GUESSED THE CORRECT NUMBER</p>"
    }else{
        finishMsg.style.color='red'
        finishMsg.innerHTML="<p>YOU FAILED TO GUESS THE CORRECT NUMBER</p>"
        finishMsg.innerHTML+=`<p>CORRECT NUMBER WAS ${randomNumber}</p>`
    }
    
}

document.addEventListener('DOMContentLoaded',function(){
    randomNumberGenerator()
    restartButton.addEventListener('click',restartGameFunction)
    form.addEventListener('submit',function(e){
        e.preventDefault();

        let value=Number(document.querySelector('#guessBox').value);
        document.querySelector('#guessBox').value=''
        console.log(value)
        if(isNaN(value) || value<1 || value>100){
            result.innerHTML='PLEASE ENTER A VALID NUMBER';
            return;
        }
        else if(value==randomNumber){
            finishGame(true)
            return
        }
        if(value>randomNumber){
            result.innerHTML='<p>YOUR GUESS IS TOO HIGH</p>'
        } 
        else if(value<randomNumber){
            result.innerHTML='<p>YOUR GUESS IS TOO LOW</p>'
        }
    
        addAndDisplayPreviousGuess(value);

        currentGuessesRemaining--;
        displayCurrentGuessesRemaining()
        if(currentGuessesRemaining==0){
            finishGame(false)
            return
        }
        
    })
})


//the random number is not printing properly in the console
//revise and see if the code can be minimizeD
