let parola = prompt('Inserisci una parola o una serie di numeri!');

function reverse(parola) {
    
    parola.split('').sort().join('');

    console.log(parola.split('').sort().join(''));

}

reverse(parola);
