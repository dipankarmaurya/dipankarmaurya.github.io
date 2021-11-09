
function getPower(voltage, current) {
    return voltage * current;
}

let v = 20;
let i = 10;

let p = getPower(v, i);
console.log(p);
