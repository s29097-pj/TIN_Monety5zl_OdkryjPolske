// Obracanie monety
document.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll(".coin-img"), function (coin, i, coins) {
    coin.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("flipped");
    });
  });

  var coinContainerElement = document.getElementById('coinContainer');
});
