const moeda = document.getElementById("moeda");
const input = document.getElementById("valorInput");
const btn = document.getElementById("submit");

moeda.addEventListener("change", function () {
  const currency = moeda.value;
  const url = `https://economia.awesomeapi.com.br/json/last/${currency}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

input.addEventListener("change", function () {
  const currency = moeda.value;
  const url = `https://economia.awesomeapi.com.br/json/last/${currency}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
});

var teste = 0;
