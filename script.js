let p1score = 0; //PLAYER 1 SCORE
let p2score = 0; //PLAYER 2 SCORE
let rounds = 1; //ROUND NUMBER INDICATOR

const onClick = (event) => {
  var elId = event.target.id;
}
window.addEventListener('click', onClick);

//GIVES OR TAKES AWAY POINTS FROM PLAYERS
function player1PlusPoint() {
  p1score += 1;
  document.getElementById('pointsP1').innerHTML = p1score + "/3";
}
function player2PlusPoint() {
  p2score += 1;
  document.getElementById('pointsP2').innerHTML = p2score + "/3";
}
function roundsIncrease() {
  rounds += 1;
  document.getElementById('roundsTitle').innerHTML = "Round " + rounds;
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('goAgainButton').innerHTML = "<h3 class='cursor' onclick='goAgain()'>Go Again?</h3>";
    buttons = document.getElementsByTagName('button');
    imgs = document.getElementsByTagName('img');
    const clickedButton = button;

    if (clickedButton.value >= 4) {
        alert("Please choose an option on your own side");
    } else {

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("hidden");
    }

    for (var j = 0; j < imgs.length; j++) {
      if (clickedButton.value == imgs[j].getAttribute('data-index')) {
        imgs[j].classList.remove('hidden');
      }
    }

    let opponentsChoice = Math.floor(Math.random() * (6 - 3) + 3);

    for (var k = 0; k < imgs.length; k++) {
      if (opponentsChoice+1 == imgs[k].getAttribute('data-index')) {
        console.log(opponentsChoice);
        console.log(imgs[k]);
        imgs[k].classList.remove('hidden');
      }
    }


    //ROCK
    if (clickedButton.value == 1 && opponentsChoice == 3) {
      document.getElementById("outcomeTitle").innerHTML = "It's a tie!";
    } else if (clickedButton.value == 1 && opponentsChoice == 4 ) {
      document.getElementById("outcomeTitle").innerHTML = "You Lose!";
      player2PlusPoint();
    } else if (clickedButton.value == 1 && opponentsChoice == 5 ) {
      document.getElementById("outcomeTitle").innerHTML = "You Win!";
      player1PlusPoint();
    }

    //PAPER
    if (clickedButton.value == 2 && opponentsChoice == 3) {
      document.getElementById("outcomeTitle").innerHTML = "You Win!";
      player1PlusPoint();
    } else if (clickedButton.value == 2 && opponentsChoice == 4 ) {
      document.getElementById("outcomeTitle").innerHTML = "It's a tie!";
    } else if (clickedButton.value == 2 && opponentsChoice == 5 ) {
      document.getElementById("outcomeTitle").innerHTML = "You Lose!";
      player2PlusPoint();
    }

    //SCISSORS
    if (clickedButton.value == 3 && opponentsChoice == 3) {
      document.getElementById("outcomeTitle").innerHTML = "You Lose!";
      player2PlusPoint();
    } else if (clickedButton.value == 3 && opponentsChoice == 4 ) {
      document.getElementById("outcomeTitle").innerHTML = "You Win!";
      player1PlusPoint();
    } else if (clickedButton.value == 3 && opponentsChoice == 5 ) {
      document.getElementById("outcomeTitle").innerHTML = "It's a tie!";
    }

    if (p1score == 3) {
      document.getElementById("outcomeTitle").innerHTML = "You Win the Match!!";
      document.getElementById('goAgainButton').innerHTML = "<h3 class='cursor' onclick='resetScores()'>Play Another Round??</h3>";
    } else if (p2score == 3) {
      document.getElementById("outcomeTitle").innerHTML = "Your Opponent Wins the Match!!";
      document.getElementById('goAgainButton').innerHTML = "<h3 class='cursor' onclick='resetScores()'>Play Another Round??</h3>";
    }
  }

  });
});

//BRINGS THE CHOICES BACK
function goAgain() {
  document.querySelectorAll('button').forEach(button => {
    x = document.getElementsByTagName('button');
    y = document.getElementsByTagName('img');
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("hidden");
    }
    for (var j = 0; j < y.length; j++) {
      if (y[j].getAttribute('data-index') != null) {
        y[j].classList.add("hidden");
      }
    }
  });
  document.getElementById('goAgainButton').innerHTML = "<h3>Pick Below</h3>";
  roundsIncrease();
}

//RESET THE SCORE COUNTERS
function resetScores() {
  document.getElementById('pointsP1').innerHTML = "0/3";
  document.getElementById('pointsP2').innerHTML = "0/3";
  p1score = 0;
  p2score = 0;
  rounds = 0;
  document.getElementById('roundsTitle').innerHTML = "Round " + rounds;
  document.getElementById("outcomeTitle").innerHTML = "Your Turn";
  document.getElementById('goAgainButton').innerHTML = "<h3>Pick Below</h3>";
  goAgain();
}
