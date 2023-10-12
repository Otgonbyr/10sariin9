/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let a = 0; a < num.length; a++){
    console.log(num[a])
}
*/

let reverseNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let temp = reverseNum[reverseNum.length -1]

for(let a = reverseNum.length -2; a >= reverseNum.length; a--){
    reverseNum[a + 1] = reverseNum[a]
}
reverseNum[0] = temp
console.log(reverseNum);
