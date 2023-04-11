const button = document.getElementById("converter");
const resultDiv = document.getElementById("result");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const amount = parseFloat(document.querySelector("#amount").value);
  const from_currency = document.querySelector("#from_currency").value;
  const to_currency = document.querySelector("#to_currency").value;

  const myHeaders = new Headers();
  myHeaders.append("apikey", "IpLaInURpX4pn9tM2m8lJGJ7nJandf2J");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/fixer/convert?to=${to_currency}&from=${from_currency}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.result;
      console.log(data);
      resultDiv.innerHTML += `<p>${amount} ${from_currency} equivale a ${result.toFixed(
        2
      )} ${to_currency}</p>`;
    })
    .catch((error) => console.log(error));
});
