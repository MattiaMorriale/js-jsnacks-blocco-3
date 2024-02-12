const textDemo = document.querySelector('#text');

const buttonElement = document.querySelector("#avvia");

setTimeout (function(){
    textDemo.classList.add('op-1');
    textDemo.classList.remove('op-0');
}, 1000)

buttonElement.addEventListener("click",
function() {

    let parola = prompt('Inserisci una parola o una serie di numeri!');
    
    function reverse(parola) {
        
        let stampa = parola.split('').sort().join('');
    
        document.getElementById('output').innerHTML = stampa;
    
    }
    
    reverse(parola);

})

