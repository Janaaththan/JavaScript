function calcCircleAreaByRadius (r) {
    if (r > 0){
        A = (Math.PI*Math.pow(r, 2)).toFixed(2);
        return A;
    }
    /* Definerer uttrykket for A ved hjelp av r, hvor r er større enn 0 */
    else {
        return(undefined);
    }
    /* Returnerer "undefined" når r < 0 */
}

console.log( calcCircleAreaByRadius(1) );
console.log( calcCircleAreaByRadius(8) );
console.log( calcCircleAreaByRadius("fifteen") );
console.log( calcCircleAreaByRadius(-4) );