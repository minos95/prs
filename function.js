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

let gameSide = document.getElementById("game-side");
let topMenuSide = document.getElementById("top-menu");
let message = document.getElementById("message");
let btnStart = document.getElementById("button-start-game");
let btnExit = document.getElementById("button-exit-game");
let winLabelPlayer2 = document.querySelector("#opponent-side h4");
let winLabelPlayer1 = document.querySelector("#player-side h4");
let roundLabel = document.querySelector("#opponent-side h3");
let imgLabel = document.getElementById("selected-opponent");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item1");
let item = document.getElementById("item1");
function startGame() {
  goToGame();
}
function selectItem(hand) {
  choice = hand;
  myMove();
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
  sumRounds = 0;
  resultGame = "false";
  player1.win = player2.win = player1.lose = player2.lose = 0;
  goToMenu();
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
  obj.style.backgroundColor = "white";
}

function myMove() {
  let id = null;
  const elem = document.getElementById("item1");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
