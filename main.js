function getComputerChoice() {
    const choices = ['rock', 'raper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


console.log(getComputerChoice());