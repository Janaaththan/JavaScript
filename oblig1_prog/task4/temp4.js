window.onload = startup;

function startup() {
    var btn = document.getElementById("btn");
    btn.addEventListener("click", msg);
}

function msg() {
    var x = Number(document.getElementById("inp1").value);
    var y = Number(document.getElementById("inp2").value);
    var tegn = document.getElementById("fortegn").value;
        if (tegn == 1) {
            cal = x + y;
        }
        else if (tegn == 2) {
            cal = x - y;
        }
        else if (tegn == 3) {
            cal = x * y;
        }
        else if (tegn == 4) {
            cal = x / y;
        }

        document.getElementById("result").innerHTML += "<p> The result is " + cal + "</p>";
        
        var numb = Math.abs(cal);
        if (numb % 2 == 0) {
            document.getElementById("result").innerHTML += "<p> The number is even</p>";
        }
        else {
            document.getElementById("result").innerHTML += "<p> The number is  odd </p>";
        }
}

