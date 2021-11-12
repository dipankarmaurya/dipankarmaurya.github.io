//function to generate an array between two integers of 1 step length.
function generateArray(a, b) {
    let arr = new Array();
    for (let x = a; x <= b; x++){
        arr.push(x);
    }
    return arr;
}

let arr = generateArray(2, 9);
console.log(arr);