console.log("This is ex1.js");

//Part 2
let firstName = "Melissa";
let lastName = "Muñoz";
let yearOfBirth = 1991;

let age = 2021 - yearOfBirth;

document.getElementById("student_message").innerText = "Hi, I'm "+firstName+" "+lastName+", I'm "+age+" years old and I'm learning Javascript";

//Part 3
let num1 = parseFloat(document.getElementById("num_1").innerText);
let num2 = parseFloat(document.getElementById("num_2").innerText);

document.getElementById("result").innerText = ((num1 + num2)/2).toFixed(2);

//Part 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

if(phone1.length == 9){ 
    console.log("Phone 1 is valid")
}
if(phone2.length == 9){ 
    console.log("Phone 2 is valid")
}
if(phone3.toString().length == 9){ 
    console.log("Phone 3 is valid")
}

//Part 5
console.log(Math.pow(32, 6));

//Part 8
let url1 = document.getElementById("url_1").innerText;
document.getElementById("url_2").innerText = "http://" + url1;

let url2 = (document.getElementById("url_3").innerText).replace("https://", "");
document.getElementById("url_4").innerText = url2;

