// ****validazione stringa non sia vuota
function isValidString(text) {
    return text.length > 0;
}

// ****validazione numero compreso tra 0 e 10000
function rangeNumber (number) {
    return parseInt(number) > 0 && parseInt(number) <= 10000;
}

// ****validazione valore della variabile per l'età
function ageControl (value) {
    const possibleValue = ['adult', 'underage', 'over65'];
    return possibleValue.includes(value);
}

// **** unione delle tre variabili
function validData (text, number, value) {
    if (isValidString(text) && rangeNumber(number) && ageControl(value)) {
        return true;
    } else {
        return false;
    }
}

// ****salviamo i valori in input del form
const userName = document.getElementById('fullname');
const userKm = document.getElementById('numberOfKm');
const userAge = document.getElementById('selectAge');
// ****salviamo l'elemento form per compiere azioni come submit e reset
const formCalcPrice = document.getElementById('form-calc-price');

// ****salviamo gli elementi celle che andranno compilate con i dati inseriti dall'utente
const tdUserName = document.getElementById('ticketUser');
const tdTypeTicket = document.getElementById('typeTicket');
const tdCarriageUser = document.getElementById('carriageUser');
const tdCodeUser = document.getElementById('codeUser');
const tdPriceTicket = document.getElementById('priceTicket');
// ****sezione del biglietto per nasconderla o mostrarla
const sectionTicket = document.getElementById('sectionTicket');

// ****submit
formCalcPrice.addEventListener('submit', function (event) {
    
    event.preventDefault();
    
    console.log(userName.value);
    
    // ****inizializzazione e assegnazione variabili
    let km;
    let age;
    km = userKm.value;
    age = userAge.value;
    
    if(validData(userName.value, km, age)) {
        // ****calcolo il prezzo del biglietto
        let price = km * 0.21;
        let discount = age === 'underage' ? price * 20 /100 : (age === 'over65' ? price * 40 /100 : 0);
        price = price - discount;
        console.log('Il prezzo del biglietto è ' + new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price));
        
        // ****compilo le celle della tabella con i dati validati
        tdUserName.innerHTML = userName.value;
        tdTypeTicket.innerHTML = age === 'underage' ? 'Biglietto ridotto' : (age === 'over65' ? 'Biglietto over 65' : 'Biglietto standard');
        tdCarriageUser.innerHTML = parseInt((Math.random() * 10) + 1);
        tdCodeUser.innerHTML = parseInt((Math.random() * 99999) +1);
        tdPriceTicket.innerHTML = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(price);
        
        // ****reset automatico form dopo invio
        userName.value = "";
        userKm.value = "";
        userAge.value = "adult"
        
        // ****mostro la tabella che costituisce il biglietto
        sectionTicket.classList.remove('d-none');
        
    } else {
        console.log("Errore")
    }

})

// ****rimuovo il biglietto e reset form
formCalcPrice.addEventListener('reset', function (event) {
    sectionTicket.classList.add('d-none');
})


