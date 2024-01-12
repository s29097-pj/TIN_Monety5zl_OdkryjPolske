const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const resultStatus = document.querySelector('#resultStatus');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

let headsCount = 0;
let tailsCount = 0;

// Mapowanie wyników na nazwy
const resultNames = {
  heads: 'Orzeł',
  tails: 'Reszka'
};

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function processResult(result) {
  if (result === 'heads') {
    headsCount++;
    heads.innerText = headsCount;
  } else {
    tailsCount++;
    tails.innerText = tailsCount;
  }

  // Wyświetlenie nazwy wyniku
  resultStatus.innerText = resultNames[result];
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn(function () {
    coin.setAttribute('class', 'animate-' + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}

button.addEventListener('click', flipCoin);
