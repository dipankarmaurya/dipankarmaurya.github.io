//function to check if number is prime or not

function isPrime(n) {
    
    for (let i = 2; i * i <= n; i++){
        if(n%i==0)
        {
            return false;
        }
    }
    return n > 1;
}

console.log(isPrime(7));