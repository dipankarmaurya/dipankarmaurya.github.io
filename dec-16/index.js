


let arr = [];
let n = 100;
while (n != 0) {
    let dig = n % 10;
    arr.push(dig)
    n = Math.floor(n / 10);
}
console.log(arr);