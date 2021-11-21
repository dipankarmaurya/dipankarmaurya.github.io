
function printPattern(n) {
    for (let i = 1; i <= n; i++){
        let s = "";
        for (let j = 1; j <= n; j++){
            s += "*";
        }
        console.log(s);
    }
}

printPattern(5);