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

console.log(final);