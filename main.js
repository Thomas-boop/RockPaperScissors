function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection,computerSelection)  {
    let player = playerSelection.toLowerCase();


    if(player === computerSelection ){
        return "Both players selected "+player+" it's a tie!.";
    } else if (player === "rock" && computerSelection === "scissors"){
        return "Rock smashes Scissors! You win!";
    } else if (player === "rock" && computerSelection === "paper"){  
        return "Paper covers rock! You lose";
    } else if (player === "scissors" && computerSelection === "paper"){
        return "Scissors beats Paper! You win!";
    } else if (player === "scissors" && computerSelection === "rock"){
        return "Rock beats Scissors! You lose";    
    } else if(player === "paper" && computerSelection === "rock"){
        return "Paper beats Rock! You win!";
    } else if(player === "paper" && computerSelection === "scissors"){
        return "Scissors beats Paper! You lose"
    }else{
        return " mmh You selected " + player+" something went wrong ! "
    }

}

function winnerAnouncer(human,computer){
    if(human === computer){
        console.log("final result was a tie!");
    }else if(human > computer){
        console.log("You win! by "+ human +":"+ computer);
    }else if(computer > human){
        console.log("You lose! by "+ computer +":"+ human);
    }
}



// var human = 0;
// var computer = 0;
// function game(){

//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Please enter your choice: ");
//         const computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);

//         if(result.includes("win!")) {
//             human = human + 1;
//             console.log(human);
//         }else if(result.includes("lose")){
//             computer = computer + 1;
//             console.log(computer);
//         }

//     }
//     winnerAnouncer(human,computer);          
   
// }


// console.log(game());

