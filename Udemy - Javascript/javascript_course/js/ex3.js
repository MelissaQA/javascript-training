//Part 1
function calculateCelciusToFahrenheit(celcius){
    let fahrenheit = (9 * celcius / 5) + 32;
    return fahrenheit;
}

document.getElementById("convert").onclick = function() {
    let celcius = document.getElementById("temp_celsius").value;
    document.getElementById("temp_fahr").innerText = calculateCelciusToFahrenheit(celcius);
}

//Part 2
for(var a = 2022; a <= 2050; a += 4){
    document.getElementById("anos_copa").innerHTML += '<li>'+a+'</li>';
}

//Part 3
function calculateClassResult(){
    let grade1 = document.getElementById("grade1").value;
    let grade2 = document.getElementById("grade2").value;
    let absences = document.getElementById("absences").value;

    let presencePercentage = 100 - ((parseInt(absences) * 100) / 20);

    let average = (parseInt(grade1) + parseInt(grade2)) / 2;

    if(presencePercentage >= 70 && average > 6.5){
        console.log("Passed");
    } else if (presencePercentage < 70 && average < 6.5){
        console.log("Failed. Average is under 6.5 and presence percentage is under 70%");
    } else if (presencePercentage < 70){
        console.log("Failed. Presence percentage is under 70%");
    } else if (average < 6.5){
        console.log("Failed. Average is under 6.5");
    } 
}

//Part 4
var sales = [
    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },
    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },
    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },
    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },
    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }
];

let totalSold = 0;

for(var i = 0; i < sales.length; i++){
    if(!sales[i].refundRequested){
        
        if(i == 0){
            document.getElementsByTagName("td")[0].textContent = sales[i].student;
            document.getElementsByTagName("td")[1].textContent = sales[i].date;
            document.getElementsByTagName("td")[2].textContent = sales[i].amount;
        }
        else{
            nodeTr = document.createElement("TR");
            document.getElementById("course_sales").appendChild(nodeTr);

            nodeStudent = document.createElement("TD");
            nodeDate = document.createElement("TD");
            nodeAmount = document.createElement("TD");

            nodeStudentText = document.createTextNode(sales[i].student);
            nodeDateText = document.createTextNode(sales[i].date);
            nodeAmountText = document.createTextNode(sales[i].amount);

            nodeStudent.appendChild(nodeStudentText);
            nodeDate.appendChild(nodeDateText);
            nodeAmount.appendChild(nodeAmountText);

            document.getElementById("course_sales").lastElementChild.appendChild(nodeStudent);
            document.getElementById("course_sales").lastElementChild.appendChild(nodeDate);
            document.getElementById("course_sales").lastElementChild.appendChild(nodeAmount);

        }
        totalSold = totalSold + parseFloat(sales[i].amount);
    }
    
}

document.getElementById("total_sold").textContent = totalSold.toFixed(2);