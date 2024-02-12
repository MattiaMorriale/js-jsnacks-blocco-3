let frase = prompt('Inserisci una parola o una serie di numeri!');

const upperCase = [];

function reverse(frase) {
    
    let qualcosa = frase.split(" ");
    
    for (let i = 0; i < frase.length; i++) {
        
        let letter = qualcosa[i].slice(0,1).toUpperCase();

        let fullWord = letter + qualcosa[i].slice(1);

        upperCase.push(fullWord);
    }
    
    return upperCase.join(" ");
    
}

reverse(frase);

console.log(reverse(frase));


