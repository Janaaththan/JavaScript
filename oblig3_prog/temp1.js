window.onload = function() {
    let filHenter = document.getElementById("file");
    filHenter.addEventListener("change", hentFil);
}


function hentFil(event) {
    document.getElementById("file").style.background = "deepskyblue";
    let tableE = document.getElementById("data");
    let file = event.target.files[0];
    let filLeser = new FileReader();

    filLeser.readAsText(file);
    filLeser.onload = function() {
        const linjer = filLeser.result.split("\n");
     

        for (var i = 0; i < linjer.length; i++) {
            /* creates an array with the elements from the file with seperation mark "," */
            linjer[i] = linjer[i].split(",");
            /* print to tabel */
            tableE.innerHTML += "<tr><td>"  + linjer[i][0] +    "</td>" + 
                                "<td>"      + linjer[i][1] +    "</td>" +
                                "<td>"      + linjer[i][2] +    "</td>" +
                                "<td>"      + linjer[i][3] +    "</td>" +
                                "<td>"      + i            +    "</td></tr>";

        }
        console.log(linjer);
        main(linjer);
    }
}




function main(array) {
    /* getting empty table from hrml and filling it with calculations */
    let calcTabE = document.getElementById("calcTab");
    calcTabE.innerHTML  +=  "<tr><td>"  +   locNumb(array, 2).length    +       "</td>" +
                            "<td>"      +   locNumb(array, 2)           +       "</td>" +
                            "<td>"      +   typNumb(array, 1).length    +       "</td>" +
                            "<td>"      +   typNumb(array, 1)           +       "</td>" + 
                            "<td>"      +   totAmount(array, 3)         +       "</td>" +
                            "<td>"      +   averageAmount(array, 3)     +       "</td>" +
                            "<td>"      +   peakAmount(array, 3)        +       "</td>" +
                            "<td>"      +   bottomAmount(array, 3)      +       "</td>" +
                            "<td>"      +   obsDuration(array, 0)       +       "</td></tr>";    
}

function countAmount(array) {
    /* array length */
    return array.length;
}



function locNumb(array, field) {
    /* finding the number of different locations by using a in_array function, which compares with the array elements */
    var location = []
    for (i = 0;i < array.length; i++) {
        if (in_array(location, array[i][field]) != true) {
            location.push(array[i][field]);
        }
    }
    return location;
}


function typNumb(array, field) {
    /* does the same as locNumb, but for types */
    var types = []
    for (i = 0;i < array.length; i++) {
        if (in_array(types, array[i][field]) != true) {
            types.push(array[i][field]);
        }
    }
    return types;
}


function in_array( array, val ) {
    /* returns true for values(val) that could be found in the array */
    for( var i = 0; i < array.length; i++) {
        if( array[i] == val ) {
            return true;
        }
    }
}


function totAmount(array, field) {
    /* gets the sum by adding every element in to sum */
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += parseFloat(array[i][field]);
    }
    return sum.toFixed(2);
}


function averageAmount(array, field) {
    /* gets the sum and divided it by the total amount of values */
    let total = 0;
    for (var i = 0; i < array.length; i++) {
        total += parseInt(array[i][field]);
    }
    let elementAmount = array.length;
    return (total/elementAmount).toFixed(2);
}


function peakAmount(array, field) {
    /* uses a forloop to find and replace the highest value */
    let peak = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i][field] > peak) {
            peak = parseInt(array[i][field]);
        }
    }
    return peak;
}  


function bottomAmount(array, field) {
    /* does the same as peak, but would search for values lower than bottom */
    let bottom = 100000;
    for (var i = 0; i < array.length; i++) {
        if (array[i][field] < bottom) {
            bottom = parseInt(array[i][field]);
        }
    }
    return bottom;
}


function obsDuration(array, field) {
    /* makes the first and last date to time, by getTime (millisek), and then subtrakt and finds the day differece */
    let firstDate   = new Date(array[0][field]);
    let lastDate    = new Date(array[array.length-1][field]);
    return (lastDate.getTime() - firstDate.getTime())/(1000 * 3600 * 24);
}


/* First search function, but only works for single "titles" */
/* function searchFunc() {
    let table = document.getElementById("data");
    let input   = document.getElementById("search");
    let tr      = table.getElementsByTagName("tr");
    let filter  = input.value.toUpperCase();

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0] || tr[i].getElementsByTagName("td")[1];
        if (td) { 
            let txtValue = td.textContent || td.innerHTML;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }   

    } 
}
 */

 /* search function, uses jQuery elements to allow the search bar to search every td */
$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#data tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });