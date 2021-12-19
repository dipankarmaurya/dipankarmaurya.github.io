let n = 11;

for (let i = 0; i < n; i++){
    let s = "";
    for (let j = 0; j < n; j++) {
        if (i < Math.ceil(n)) {
            if (j >= i&&j<=n-i) {
                s += "*"
            }
            else {
                s += " ";
            }
        }
        else {
            if (j >= i&&j<=n-i) {
                s += " "
            }
            else {
                s += "*";
            }
        }
    }
    console.log(s);
}