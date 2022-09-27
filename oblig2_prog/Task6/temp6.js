window.onload = isPrime;

function isPrime(n) {    
    for(var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        /* Hvis n er delbar på et tall i mengden i, vil den ikke være primtal. I tillegg har det blitt definert slik at det ikke blir sjekket på i = 1, og i = n, siden det vil uansett gå */
    }
    return n > 1;
    /* Hvis det er et primtall, og større en 1, vil man få true (negative tall vil ikke bli inkludert) */
}

console.log(isPrime(-13));
console.log(isPrime(3)); 
console.log(isPrime(5)); 
console.log(isPrime("sixtyfour")); 
console.log(isPrime(2473));     
console.log(isPrime(2475)); 
console.log(isPrime(3301)); 