window.onload = startup;

function startup() {
    var buttonE = document.getElementById("btn");
    buttonE.addEventListener("click", login);
    /* Her vil vi kunne finne knappen fra HTML og sette inn en eventlistner, som vil da starte opp en funksjon */
}

function login() {
    var userE = document.getElementById("user").value;
    var passE = document.getElementById("pass").value;
    /* Finner alle  elemenetene fra HTML */
    if (userE == passE){
        alert("Username and password should be different");
    }
    /* Filtrerer vekk innlogginger hvor brukernavnet og passordet er likt */
    else if (passE.length > 8) {
        if (passE.length < 32) {
            alert("Welcome");
        }
        else {
            alert("Password must be 32 characters or less!");
        }
    }
    else {
        alert("Password must be 8 characters or more!");
    }
    /* Filtrerer og forteller brukeren om begrensningen til passordet */
}
