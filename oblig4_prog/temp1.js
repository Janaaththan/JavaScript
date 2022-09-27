window.onload = function() {
    let filHenter = document.getElementById("file");
    filHenter.addEventListener("change", hentFil);
}


function hentFil(event) {
    document.getElementById("file").style.background = "deepskyblue";
    
    let file = event.target.files[0];
    let filLeser = new FileReader();

    filLeser.readAsText(file);
    filLeser.onload = function() {
        const linjer = filLeser.result.split("\n");
     

        for (let i = 0; i < linjer.length; i++) {
            /* creates an array with the elements from the file with seperation mark "," */
            linjer[i] = linjer[i].split(",");
            /* print to tabel */
        }
            
        console.log(linjer);
        
        main(linjer);
    }
}




function main(array) {
    /* Main array calling on other smaller functions */
    /* Gets the radio input buttons from the html */
    let radLoc = document.getElementById("radLoc");
    let radTyp = document.getElementById("radTyp");
    /* Adding a eventlistner to the radio button, that reacts on click. It will send the nessesary array with field to the select option function. It will also send the informasjon to sortArray function */
    /* The seperator function will filter and make a new 2d array, so it could be drawn in canvas */
    radLoc.addEventListener("click", function(){
        selectOption(seperator(array, 2),array).addEventListener("click", sortArray.bind(null, array, 2)); 
        seperator(array ,2)
            
        });

    radTyp.addEventListener("click", function(){console.log("lol");
        selectOption(seperator(array, 1),array).addEventListener("click", sortArray.bind(null, array, 1)); 
        seperator(array ,1);
        });
    
        

    
}


function selectOption(array, orgArr) {
    /* Makes the option bar by using the array that got from the seperator function */
    let locselE = document.getElementById("locSelect");
    locselE.innerHTML = "<option value=" + 0 + ">All</option>"
    for (let i = 0; i < array.length; i++) {
        locselE.innerHTML += "<option value=" +  array[i] + ">" + array[i] + "</option>" ;        
    }
    return locselE;
}



function sortArray(originalArray, field)  {
    /* Makes a new array with the value got from the select bar. It would compare it with the original array, and if its inside, it would automatically push it to the sorted array */
    let sortedArray = [];
    let valueE = document.getElementById("locSelect").value; 
    for (let j = 0; j < originalArray.length; j++) {
    
        if (valueE === originalArray[j][field]) {
            sortedArray.push(originalArray[j]);
            console.log(originalArray[j]);
            
        }
        
        else if (valueE == 0) {
            sortedArray.push(originalArray[j]);
        }
    }
    /* Sends the sorted array to the tablle, and will automatically update every time the user selects new options */
    tableOut(sortedArray, field);
    
}

function tableOut(array, field) {
    /* Writes out the table by using innerhtml */
    let tableE = document.getElementById("data");
    if (field == 2) {
        tableE.innerHTML =  "<tr class=" + "top" + ">" +
                            "<th>Date</th>"            +
                            "<th>Type</th>"        +
                            "<th>Transaction</th>"     +
                            "</tr>";
    }

    else if( field == 1) {
        tableE.innerHTML =  "<tr class=" + "top" + ">" +
                            "<th>Date</th>"            +
                            "<th>Location</th>"        +
                            "<th>Transaction</th>"     +
                            "</tr>";

    }

    for (let i = 0; i < array.length; i++) {
        if (field == 2) {
            tableE.innerHTML +=     "<tr><td>"  + array[i][0] +    "</td>" + 
                                    "<td>"      + array[i][1] +    "</td>" +
                                    "<td>"      + array[i][3] +    "</td></tr>";
        }
        
        else if (field == 1) {
            tableE.innerHTML +=     "<tr><td>"  + array[i][0] +    "</td>" + 
                                    "<td>"      + array[i][2] +    "</td>" +
                                    "<td>"      + array[i][3] +    "</td></tr>";
        }

        }    

    let calcTabE = document.getElementById("calcTab");
    calcTabE.innerHTML =    "<tr class=" + "top"+ ">" + 
                            "<th>Average amount</th>" +
                            "<th>Max amount</th>"     +  
                            "<th>Min amount</th>"     +  
                            "</tr>";

    calcTabE.innerHTML  +=  "<tr><td>"      +   averageAmount(array, 3)     +       "</td>" +
                            "<td>"          +   peakAmount(array, 3)        +       "</td>" +
                            "<td>"          +   bottomAmount(array, 3)      +       "</td></tr>";    

}



function seperator(array, field) {
    /* finding the number of given field by using a in_array function, which compares with the array elements */
    /* It will also add the amount of each uniq element in to a 2d array, for later use. */
     
    var location = [];
    var sorted_amount = [];
    let sort = {};
    
    
    for (let i = 0; i < array.length; i++) {
        if (in_array(location, array[i][field]) != true) {
            location.push(array[i][field]);

            for (let j = 0; j < location.length; j++) {
                if(array[i][field] === location[j]) {
                    sort["amount_" + j] = parseFloat(array[i][3]);                   
                }
                
            }
            
        }
        else {
            for (let j = 0; j < location.length; j++) {
                if(array[i][field] === location[j]) {
                    sort["amount_" + j] += parseFloat(array[i][3]);                    
                }                
            }
        }
        
    }

    for (let k = 0; k < location.length; k++) {
        sorted_amount.push([location[k], sort["amount_" + k]]);
    }

    
    draw(sorted_amount);
    
    /* draw2(sorted_amount); */
    return location;
    
}


function draw(array) {
    /* Draws the graf by using Chart */
    var x = [];
    var y = [];
    var canvasE = document.getElementById("canvasChart");  
    var ctx = canvasE.getContext("2d");
    for (let i = 0; i < array.length; i++) {
        x.push(array[i][0]);
        y.push(array[i][1]);
        
    }
    console.log(x, y)
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x,
            datasets: [{
                label: 'Amount',
                data: y,

            }]
        
        },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Total amount used',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }

    }
});
}

function draw2(data) {
    let canvas = document.getElementById("canvasExample");
    let ctx = canvas.getContext("2d");
    let indent = canvas.width / (data.length + 1);
    let xPos = indent;
    let total = 0;
  
    data.forEach(stat => {
      total += stat[1];
    });
  
    data.forEach(stat => {
      let height = canvas.height * (stat[1] / total);
  
      ctx.fillStyle = "#1e1e1e";
      ctx.fillText(stat[0], xPos - (stat[0].length), canvas.height - 10);
  
      ctx.fillRect(xPos, canvas.height - height - 30, 15, height);
  
      xPos += indent;
    });
  
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