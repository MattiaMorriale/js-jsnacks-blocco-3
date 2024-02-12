const textDemo = document.querySelector('#text');

const buttonElement = document.querySelector("#avvia");

setTimeout (function(){
    textDemo.classList.add('op-1');
    textDemo.classList.remove('op-0');
}, 2000)

buttonElement.addEventListener("click",
function() {

    const number = ['1','2','3'];
    const letter = ['a','b','c'];
    const final = [];
    
    function pusher(letter, number, final) {
        for (let i = 0; i < number.length; i++) {
            final.push(letter[i]);
            final.push(number[i]);
        }
    }
    
    pusher(letter, number, final)
    
    document.getElementById('output').innerHTML = final;

})
