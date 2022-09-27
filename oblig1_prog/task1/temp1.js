window.onload = startup;

function startup() {
    var btnHi  = document.getElementById("btnHi");
    var btnBye = document.getElementById("btnBye");
    btnBye.addEventListener("click", msgBye);
    btnHi.addEventListener("click", msgHi);
}

function msgHi() {
    alert('Hi you!');
}

function msgBye() {
    alert('Get out of my sight plebeian!');
}
