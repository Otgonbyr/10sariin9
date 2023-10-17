/* twoSum */
// let num = [2, 7, 11, 15, 4, 9]
// let target = 9;

// function NUMBER() {
//     for (let a = 0; a < num.length; a++) {
//         for (let b = a; b < num.length; b++) {
//             if (target === num[a] + num[b]) {
//                 return [a, b]
//             }
//         }
//     }
// }
// console.log(NUMBER())


/* threeSum */ 
// let num = [2, 7, 11, 15, 4, 9, 3]
// let target = 18;

// function NUMBER() {
//     for (let a = 0; a < num.length; a++) {
//         for (let b = a; b < num.length; b++) {
//             for (let c = b; c < num.length; c++) {
//                  if (target === num[a] + num[b] + num[c]) {
//                 return [a, b, c]
//             }
//             }
//         }
//     }
// }
// console.log(NUMBER())

/* sort */
// let nums = [1, 6, 2, 3, 7, 4, 9, 8, 5]
//     nums.sort()
//     console.log(nums)
    

let num = [44, 9, 12, 4, 1]
let sum = 0

for (let a = 0; a < num.length; a++) {
    for (let b = a + 1; b < num.length; b++) {
          if (a >! b) {
            sum = num[a] >! num[b]
            }
            console.log(sum)
    }
}





