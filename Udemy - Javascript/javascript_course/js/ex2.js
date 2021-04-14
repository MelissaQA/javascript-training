//Part 1
let celcius = document.getElementById("celsius_1").innerText;
let fahrenheit = (9 * celcius / 5) + 32;

document.getElementById("fahr_1").innerText = fahrenheit;

celcius = document.getElementById("celsius_2").innerText;
fahrenheit = (9 * celcius / 5) + 32;

document.getElementById("fahr_2").innerText = fahrenheit;

celcius = document.getElementById("celsius_3").innerText;
fahrenheit = (9 * celcius / 5) + 32;

document.getElementById("fahr_3").innerText = fahrenheit;

//Part 2

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
document.getElementById("best_students").innerText = classification[5]+", "+classification[4]+", "+classification[3];

//Part 3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'starsReviewsPercentage' : function(){
        let reviewsSum = this["1_stars_reviews"] + this["2_stars_reviews"] + this["3_stars_reviews"] + this["4_stars_reviews"] + this["5_stars_reviews"];
        let percentage = (this["5_stars_reviews"] * 100) / reviewsSum;
        return percentage.toFixed();
    }
}

document.getElementById("course_title").innerText = course.title;
document.getElementById("main_category").innerText = course.categories[0];
let percentageCalculation = course.starsReviewsPercentage().toString();
document.getElementById("reviews_5_stars").innerText = percentageCalculation + "%";

//Part 4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

let lastElement = shoppingList.pop();
shoppingList.unshift(lastElement);

shoppingList.push("Cheese", "Eggs");
console.log(shoppingList);