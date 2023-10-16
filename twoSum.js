let num = [2, 7, 11, 15, 4, 9]
let target = 9;

function NUMBER() {
    for (let a = 0; a < num.length; a++) {
        for (let b = a; b < num.length; b++) {
            if (target === num[a] + num[b]) {
                return [a, b]
            }
        }
    }
}
console.log(NUMBER())
