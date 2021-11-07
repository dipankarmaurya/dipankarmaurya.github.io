let display = document.getElementById("display");
// display.textContent = "x";
let operations = document.getElementsByClassName('operations');
let count = 0;
for (let operation of operations) {
    operation.addEventListener('click', function () {
        var val = this.getAttribute('data-val');
        // console.log(val);
        if (val == '+') {
            count++;
            display.textContent = count+"";
        }
        else if (val == '-') {
            if (count == 0)
                return;
            count--;
            display.textContent = count+""; 
        }
        else {
            count=0;
            display.textContent = count+""; 
        }
    })
}