// Selecting required nodes

const buttons = document.querySelectorAll(".btn"),
  playerScoreText = document.querySelector("#player-score"),
  computerScoreText = document.querySelector("#computer-score"),
  message = document.querySelector("#message");

// Variables for values which will be updated

let playerScore = 0,
  computerScore = 0,
  playerSelection,
  computerSelection;

// adding Eventlistners to buttons and getting user and computer selections

buttons.forEach(function (option) {
  option.addEventListener("click", function (e) {
    playerSelection = e.target.textContent;
    let randomSelection = Math.random();

    if (randomSelection < 0.33) {
      computerSelection = "Rock";
    } else if (randomSelection < 0.6) {
      computerSelection = "Paper";
    } else {
      computerSelection = "Scissors";
    }
    startGame();
  });
});

// Game starts here

function startGame() {
  const result = checkBothSelections(playerSelection, computerSelection);
  switch (result) {
    case "Draw":
      message.textContent = "Its a tie !";
      message.style.color = "black";
      break;

    case "Computer":
      message.textContent = "Computer Won !";
      message.style.color = "red";
      computerScore++;
      break;

    case "Player":
      message.textContent = "You Won !";
      message.style.color = "green";
      playerScore++;
  }

  // Showing scores and computer selection

  document.querySelector(".comp-selection").innerHTML =
    "-Computer Selection was - " +
    "<strong> " +
    computerSelection +
    "</strong>";
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

// Compare both selections under possible conditons

function checkBothSelections(player, computer) {
  if (player === computer) {
    return "Draw";
  }
  if (player === "Rock") {
    if (computer === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (player === "Paper") {
    if (computer === "Scissors") {
      return "Computer";
    } else {
      return "Player";
    }
  }
  if (player === "Scissors") {
    if (computer === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }
}
