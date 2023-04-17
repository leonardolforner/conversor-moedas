function converter() {
    const input = document.getElementById("input").value;
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const appId = "f8552fa4d2f8449fb8d9c832a112caa7";
    
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}&base=${"USD"}`)
      .then(response => response.json())
      .then(data => {
        const taxa1 = data.rates[de];
        const taxa2 = data.rates[para];
        const taxaFinal = (taxa2/taxa1)
        const resultado = (input * taxaFinal).toFixed(2);


        document.getElementById("output").value = resultado;
      })
      .catch(error => console.log(error));
  }