let parola = prompt('Inserisci una parola o una serie di numeri!');

function reverse(parola) {
    
    parola.split('').reverse().join('');

    console.log(parola.split('').reverse().join(''));

}

reverse(parola);
