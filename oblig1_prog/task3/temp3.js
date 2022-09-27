var x = Number(prompt("Please enter a value for x:" ));
var y = Number(prompt("Please enter a value for y:" ));


var add     = x + y;
var sub     = x - y;
var mult    = x * y;
var divi    = x / y;

window.onload = oppstart;
function oppstart() {
    document.getElementById("resultat").innerHTML +=
        "<p> x-verdi : " + x + "</p>" +
        "<p> y-verdi : " + y + "</p>" +
        "<p> Addisjon : " + add + "</p>" +
        "<p> Subtraksjon : " + sub + "</p>" +
        "<p> Multiplikasjon : " + mult + "</p>" +
        "<p> Divisjon : " + divi + "</p>";
}


