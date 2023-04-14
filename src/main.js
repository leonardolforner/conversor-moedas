const resultDiv = document.getElementById("result");

const amount = document.getElementById("amount");

const selection = document.querySelector("select");

const converter = () => {
  setTimeout(() => {
    const value = parseFloat(amount.value);

    const from_currency = document.querySelector("#from_currency").value;
    const to_currency = document.querySelector("#to_currency").value;

    const myHeaders = new Headers();
    myHeaders.append("apikey", "qU4ATf7aCktz46CTRyhVd9f7TWtCFHGV");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/fixer/convert?to=${to_currency}&from=${from_currency}&amount=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const result = data.result;
        console.log(data);
        resultDiv.innerHTML += `<p>${value} ${from_currency} equivale a ${result.toFixed(
          2
        )} ${to_currency}</p>`;
      })
      .catch((error) => console.log(error));
  }, 5);
};

amount.addEventListener("input", converter);
selection.addEventListener("change", converter);
