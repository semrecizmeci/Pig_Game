'use strict';
let randomNumber = Math.floor(Math.random() * 6) + 1;
let player1 = document.querySelector('#name--0');
let player2 = document.querySelector('#name--1');
let btnRoll = document.querySelector('.btn--roll');
let current0 = document.querySelector('#current--0');
let dice = document.querySelector('.dice');
let dice1 = 'dice-1.png';
let dice2 = 'dice-2.png';
let dice3 = 'dice-3.png';
let dice4 = 'dice-4.png';
let dice5 = 'dice-5.png';
let dice6 = 'dice-6.png';
let score0 = document.querySelector('#score--0');
let btnHold = document.querySelector('.btn--hold');
let current1 = document.querySelector('#current--1');
let score1 = document.querySelector('#score--1');
let btnNew = document.querySelector('.btn--new');
let player = 0;

let btnHoldFunc = function () {
  if (player === 0) {
    score0.textContent = Number(score0.textContent) + randomNumber;
    player = 1;
    // btnHold.removeEventListener('click', btnHoldFunc);
    console.log('Hold tuşu :' + player);
  } else {
    score1.textContent = Number(score1.textContent) + randomNumber;
    player = 0;
    // btnHold.removeEventListener('click', btnHoldFunc);
    console.log('Hold tuşu :' + player);
  }

  if (score0.textContent >= 20) {
    player1.textContent = 'WİNNER 😸👾';
    player2.textContent = '🌨🌨🥶';
  }

  if (score1.textContent >= 20) {
    player2.textContent = 'WİNNER 😸👾';
    player1.textContent = '🌨🌨🥶';
  }
};

let randomFunc = function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  if (player === 1) {
    current1.textContent = randomNumber.toString();
    player = 1;
    console.log('roll dice tuşu :' + player);
  } else if (player === 0) {
    current0.textContent = randomNumber.toString();
    player = 0;
    console.log('roll dice tuşu :' + player);
  }

  if (randomNumber === 1) {
    dice.src = dice1;
    if (player === 0) {
      score0.textContent = '0';
      player = 1;
      console.log('randomdaki durum :' + player);
    } else {
      score1.textContent = '0';
      player = 0;
      console.log('randomdaki durum :' + player);
    }
  } else if (randomNumber == 2) {
    dice.src = dice2;
  } else if (randomNumber == 3) {
    dice.src = dice3;
  } else if (randomNumber == 4) {
    dice.src = dice4;
  } else if (randomNumber == 5) {
    dice.src = dice5;
  } else if (randomNumber == 6) {
    dice.src = dice6;
  }
};

let btnNewFunc = function () {
  score0.textContent = '0';
  score1.textContent = '0';
  current0.textContent = '0';
  current1.textContent = '0';
  player1.textContent = 'Player 1';
  player2.textContent = 'Player 2';
};

btnRoll.addEventListener('click', randomFunc);

btnHold.addEventListener('click', btnHoldFunc);

btnNew.addEventListener('click', btnNewFunc);
