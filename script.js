const dice = document.querySelectorAll('.die');
const rollButton = document.getElementById('rollButton');

function rollDice() {
  dice.forEach(die => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    die.textContent = randomNumber;
  });
}

rollButton.addEventListener('click', rollDice);