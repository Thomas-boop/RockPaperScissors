function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function showResult(result){

    let div  = document.querySelector(".result");
    div.innerHTML = result;

}

let pScore = 0;
let cScore = 0;

function keepScore(){
    document.getElementById("pScore").textContent = pScore;
    document.getElementById("cScore").textContent = cScore;
}

function updateMoves(pInput, cInput) {
    document.getElementById("p-move").src = `./images/${pInput}.svg`;
    document.getElementById("c-move").src = `./images/${cInput}.svg`;
  }
 
function playRound(playerSelection,computerSelection)  {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();


    if(player === computer ){
        return "Both players selected "+player+" it's a tie!. Continue playing.";
    } else if (player === "rock" && computer === "scissors"){
        pScore++;
        return "Rock smashes Scissors! You win!";
    } else if (player === "rock" && computer === "paper"){
        cScore++;  
        return "Paper covers rock! You lose";
    } else if (player === "scissors" && computer === "paper"){
        pScore++;
        return "Scissors beats Paper! You win!";
    } else if (player === "scissors" && computer === "rock"){
        cScore++;
        return "Rock beats Scissors! You lose";    
    } else if(player === "paper" && computer === "rock"){
        pScore++;
        return "Paper beats Rock! You win!";
    } else if(player === "paper" && computer === "scissors"){
        cScore++;
        return "Scissors beats Paper! You lose"
    }else{
        return " mmh You selected " + player+" something went wrong ! "
    }

}



function winnerAnouncer(){
    if (pScore === 5 || cScore === 5) {
        const winner =
          pScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
      }
      return false;
}



let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");



rockButton.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    updateMoves("Rock",computerSelection);
    let result = playRound("rock", computerSelection);
    showResult(result);
    keepScore();
    if (winnerAnouncer()) {
        pScore = cScore = 0;
        keepScore();
      }

    }
    winnerAnouncer(human,computer);          
   
}


console.log(game());




// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

