window.onload = startup;

function startup() {
    var btnBye = document.getElementById("btnBye");
    btnBye.addEventListener("click", msgBye);
}
function msgBye() {
    alert('Get out of my sight plebeian!');
}


function input() {
    var inp1 = document.getElementById("int1").value;
    var tegn = document.getElementById("tegn").innerHTML;
    var inp2 = document.getElementById("int2").value;
    var button = document.getElementById("buttn");
    button.addEventListener("click", calc);
}

function calc() {
    alert("lol");
}
