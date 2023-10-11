let balance = [1400, 500, 12313, 12312, 3421, 9000, 4353, 1000]
let a = 0 
while (a < balance.length) {
    balance[a] *= 1.15
    a++
}
console.log(balance)