
window.onload = startup;

function startup() {
    var btnE = document.getElementById("btn");
    btnE.addEventListener("click", chrisTree);
    /* Her vil vi kunne finne knappen fra HTML og sette inn en eventlistner, som vil da starte opp en funksjon */
}
function chrisTree() {
    var height  = document.getElementById("height").value;
    var width   = document.getElementById("width").value;
    var sym     = document.getElementById("sym").value;
    /* Henter elementer fra HTML */
    for (var i = 0; i < height; i++) {
        var star = sym;
        var space = ' ';

        for (var j = 1; j <= i*width; j++) {
            star = star + sym + sym;
        }

        var spaceBefore = space.repeat(height-i-1);
        star = spaceBefore + star;
        console.log(star);
        /* Printer ut "star"; hvor mønsteret har blitt deklarert ovenfor */
    }
}