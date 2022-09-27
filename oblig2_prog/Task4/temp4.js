function calc1(a, b) {
    if(a == b) {
        return false;
    }
    /* Sjekker om verdiene a og b er like, og vil da gi "false" i følge logikk */
    else {
        return true;
    }
    /* Hvis verdiene er ulike vil de bli "true" */
}
/* Funksjonen blir kjørt gjennom consolen, der brukeren velger verdien for variablene */

function calc2(a, b) {
    XOR = (a || b) &&  !(a && b);
    return XOR;
}
/* Her blir formelen implementert, og blir da kjørt gjennom med variabler valgt av brukeren */

console.log('calculation 1 : ')
console.log(calc1(0,0));
console.log(calc1(0,1));
console.log(calc1(1,0));
console.log(calc1(1,1));

console.log('calculation 2 : ')
console.log(calc2(0,0));
console.log(calc2(0,1));
console.log(calc2(1,0));
console.log(calc2(1,1));