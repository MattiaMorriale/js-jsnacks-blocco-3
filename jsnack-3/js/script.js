const textDemo = document.querySelector('#text');

const buttonElement = document.querySelector("#avvia");

setTimeout (function(){
    textDemo.classList.add('op-1');
    textDemo.classList.remove('op-0');
}, 500)

buttonElement.addEventListener("click",
function() {

    const numbers = ['1','2','3','4','5','6','7','8','9','10'];
    
    let minnumber = prompt('inserisci un numero minimo da 1 a 10');
    let maxnumber = prompt('inserisci un numero minimo da 1 a 10');
    
    minnumber.length = numbers[''];
    maxnumber.length = numbers[''];
    
    const cut = [];
    
    function arraycut(cut, minnumber, maxnumber, numbers) {
        for  (let i = minnumber - 1; i < maxnumber; i++) {
            cut.push(numbers[i]);
        }
    }
    
    arraycut(cut, minnumber, maxnumber, numbers);
    
    document.getElementById('output').innerHTML = cut;
    
})

