function invalidString (inputString) {
    let stringLength = inputString.length, letteraVar;
    for (i = 0; i < stringLength ; i++) {
        letteraVar = parseInt(inputString.charAt(i))
        if (isNaN(letteraVar)) {
            return true;
        }
    }
    if (stringLength < 1) {
        return true;
    } else {
        return false;
    }
}

const userName = document.getElementById('fullname');
const userKm = document.getElementById('numberOfKm');
const userAge = document.getElementById('selectAge');
const formCalcPrice = document.getElementById('form-calc-price');

formCalcPrice.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(userName.value);
    let km;
    let age;
    let kmControl = false;
    let ageControl = false;
    km = userKm.value;
    age = userAge.value;
    // do {
    //     km = userKm.value
    //     console.log(km)
    //     if (invalidString(km)) {
    //         alert("Inserisci i km in numeri interi senza punteggiatura o lettere!")
    
    //     } else {
    //         km = parseInt(km)
    //         if (!((km > 0) && (km <= 12000))) {
    //             alert("Inserisci un numero di km idoneo!")
    //         } else {
    //             kmControl = true
    //         }
    //     }
    // } while (kmControl === false)
    
    // do {
    //     age = userAge.value
    //     console.log(age)
    //     if (invalidString(age)) {
    //         alert("L'età deve essere espressa in numeri interi senza punteggiatura o lettere!")
    //     } else {
    //         age = parseInt(age)
    //         if (!((age > 0) && (age <= 100))){
    //             alert("L'età deve essere espressa in numeri interi e compresa tra 0 e 100!")
    //         } else {
    //             ageControl = true
    //         }
    //     }
    // } while (ageControl === false)
    
    let price = km * 0.21;
    let discount = age === 'underage' ? price * 20 /100 : (age === 'over65' ? price * 40 /100 : 0);
    price = price - discount;
        
    
    console.log('Il prezzo del biglietto è ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price));
})


