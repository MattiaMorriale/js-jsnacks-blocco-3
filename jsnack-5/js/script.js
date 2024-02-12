const textDemo = document.querySelector('#text');

const buttonElement = document.querySelector("#avvia");

setTimeout (function(){
    textDemo.classList.add('op-1');
    textDemo.classList.remove('op-0');
}, 1000)

buttonElement.addEventListener("click",
function() {

    let frase = prompt('Inserisci una frase');
    
    const upperCase = [];
    
    function reverse(frase) {    
    
        let qualcosa = frase.split(" "); 
    
        for (let i = 0; i < qualcosa.length; i++) {
            
            let letter = qualcosa[i].slice(0,1).toUpperCase();
            
            let fullWord = letter + qualcosa[i].slice(1);
            
            upperCase.push(fullWord);
        }
    
        return upperCase.join(" "); 
    
    }

    reverse(frase);
    
    document.getElementById('output').innerHTML = upperCase;

})
