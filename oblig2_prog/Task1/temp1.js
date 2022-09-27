window.onload = startup;
nig = [];

function startup() {
    var buttonE = document.getElementById("btn");
    buttonE.addEventListener("click", list);
    /* Her vil vi kunne finne knappen fra HTML og sette inn en eventlistner, som vil da starte opp en funksjon */
}

function list() {
    var inputE  = document.getElementById("inp").value;
    var outputE = document.getElementById("outp");
    var infoE   = document.getElementById("info");
    /* Finner alle  elemenetene fra HTML */
    nig.push(inputE);
    /* Legger til elementer i array */
    console.log(nig[nig.length-1]);
    outputE.innerHTML += "<li> [" + [nig.length-1] + "] : " + nig[nig.length-1] + "</li>";
    /* Skriver ut element nummeret og elementet i en liste til HTML */
    infoE.innerHTML =   "<p> Array length: " + [nig.length] + "</p>" +
                        "<p> First element: " + nig[0] + "</p>"+
                        "<p> Last element: " +  nig[nig.length-1] + "</p>";
    /* Skrivet ut lengden, første og siste elementet til array */
}
