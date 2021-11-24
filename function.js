let choice = "paper";
let choiceAi = "scissor";
let sumRounds = 0;
let resultGame = "false";
let itmeArray = ["scissor", "rock", "paper"];

let player1 = {
  //----the player
  name: "player1",
  win: 0,
  lose: 0,
};
let player2 = {
  //----the opponent
  name: "Ai player",
  win: 0,
  lose: 0,
};

let gameSide = document.getElementById("game-side"); //div gameside
let topMenuSide = document.getElementById("top-menu"); // menu top the logo and text
let message = document.getElementById("message"); // the message in the game
let btnStart = document.getElementById("button-start-game"); //the button start of the menu
let btnExit = document.getElementById("button-exit-game"); //button exit in the game
let winLabelPlayer2 = document.querySelector("#opponent-side h4"); // the h4 text in the opponent side to render how much win of IA player
let winLabelPlayer1 = document.querySelector("#player-side h4"); // the win label in the the first player to render how much win
let roundLabel = document.querySelector("#opponent-side h2"); //round label on the right corner
let imgLabel = document.getElementById("selected-opponent");
let textLabelSelected = document.querySelector("#opponent-side div h3");
let imgSelectedItem = document.getElementById("selected-item");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item1");
let item = document.getElementById("item1");

function startGame() {
  roundLabel.textContent = "ROUND " + sumRounds;
  winLabelPlayer1.textContent = "Win : " + player1.win;
  winLabelPlayer2.textContent = "Win : " + player2.win;
  goToGame();
}
function selectItem(hand) {
  choice = hand;

  var result = startRound(choice);

  if (result == "win") {
    player1.win++;
    player2.lose++;
    message.textContent = "Congrat You Win :) !!!!";
  } else if (result == "lose") {
    player1.lose++;
    player2.win++;
    message.textContent = "You Lose  :(";
  } else {
    message.textContent = "Draw Game";
  }
  winLabelPlayer1.textContent = "Win : " + player1.win;
  winLabelPlayer2.textContent = "Win : " + player2.win;
  sumRounds++;
  roundLabel.textContent = "ROUND " + sumRounds;
  console.log(choice);
}
function opponentSelect() {
  var random = Math.random() * 3;
  random = Math.floor(random);
  console.log(random);
  console.log("opponent " + itmeArray[random]);
  return itmeArray[random];
}
function startRound() {
  let choiceAi = opponentSelect();
  imgLabel.src = "images/" + choiceAi + ".png";
  imgLabel.style.visibility = "visible";
  imgSelectedItem.src = "images/" + choice + ".png";
  textLabelSelected.textContent = choiceAi;
  imgSelectedItem.style.visibility = "visible";
  switch (choice) {
    case "rock":
      if (choiceAi == "scissor") {
        resultGame = "win";
        return resultGame;
        console.log("you win");
      } else if (choiceAi == "paper") {
        resultGame = "lose";
        return resultGame;
        console.log("you lose");
      } else {
        resultGame = "draw";
        return resultGame;
        console.log("game draw");
      }
      break;
    case "scissor":
      if (choiceAi == "paper") {
        resultGame = "win";
        return resultGame;
        console.log("you win");
      } else if (choiceAi == "rock") {
        resultGame = "lose";
        return resultGame;
        console.log("you lose");
      } else {
        resultGame = "draw";
        return resultGame;
        console.log("game draw");
      }
      break;
    case "paper":
      if (choiceAi == "rock") {
        resultGame = "win";
        return resultGame;
        console.log("you win");
      } else if (choiceAi == "scissor") {
        resultGame = "lose";
        return resultGame;
        console.log("you lose");
      } else {
        resultGame = "draw";
        return resultGame;
        console.log("game draw");
      }
      break;
  }
}

function exitGame() {
  goToMenu();
  sumRounds = 0;
  resultGame = "false";
  player1.win = player2.win = player1.lose = player2.lose = 0;
}
function goToGame() {
  gameSide.style.display = "block";
  topMenuSide.style.display = "none";
  btnExit.style.display = "block";
  btnStart.style.display = "none";
}
function goToMenu() {
  gameSide.style.display = "none";
  topMenuSide.style.display = "block";
  btnExit.style.display = "none";
  btnStart.style.display = "block";
}

function moItem(obj) {
  obj.style.backgroundColor = "red";
}

function miItem(obj) {
  obj.style.background = "none";
}

function miBtnStart(obj) {
  obj.style.backgroundColor = "rgb(1, 163, 163)";
}
function moBtnStart(obj) {
  obj.style.backgroundColor = "aqua";
}
