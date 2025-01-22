function exchangeMoney (){
    let dollar = parseFloat(document.getElementById("txtDollar").value);
    let currency = document.getElementById("currency").value;
    let total = exchange(dollar, currency)
    displayExchage(dollar, currency ,total)

}

function exchange (dollar, currency){
    let exchangeRates = {
        riel: 4012,
        baht: 34.26,
        dong: 25445.03,
    }

    let exchangeRate = exchangeRates[currency]
    total = exchangeRate * dollar
    return total
}

function displayExchage(dollar, currency, total){
    let currencyNames = {
        riel: "Cambodai Riel",
        baht: "Thai Baht",
        dong: "Vietman Dong",
    }
    let currencyName = currencyNames[currency]
    document.getElementById("display").innerHTML = `<p>${dollar} USD change to ${currencyName} = ${total}</p>`
}