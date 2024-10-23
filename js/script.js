function invalidString (inputString) {
    let stringLength = inputString.length, letteraVar
    for (i = 0; i < stringLength ; i++) {
        letteraVar = parseInt(inputString.charAt(i))
        if (isNaN(letteraVar)) {
            return true
        }
    }
    if (stringLength < 1) {
        return true
    } else {
        return false
    }
}


do {
    km = prompt("Insrisci i km che vorresti percorrere...", 10)
    if (invalidString(km)) {
        alert("Inserisci i km in numeri interi senza punteggiatura o lettere!")
    } else {
        km = parseInt(km)
        if (!((km > 0) && (km <= 12000))) {
            alert("Inserisci un numero di km idoneo!")
        } else {
            kmControl = true
        }
    }
} while (kmControl === false)

do {
    age = prompt("Inserisci la tua età...")
    if (invalidString(age)) {
        alert("L'età deve essere espressa in numeri interi senza punteggiatura o lettere!")
    } else {
        age = parseInt(age)
        if (!((age > 0) && (age <= 100))){
            alert("L'età deve essere espressa in numeri interi e compresa tra 0 e 100!")
        } else {
            ageControl = true
        }
    }
} while (ageControl === false)

let price = km * 0.21
let discount = age < 18 ? price * 20 /100 : (age >= 65 ? price * 40 /100: 0)
price = price - discount
    

console.log('Il prezzo del biglietto è ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price))
