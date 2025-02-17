// 1. Truthy and Falsy Check
//Write a script to check if a value is truthy or falsy. 
// Use the following values: 0,"" (empty string),"Hello",42,null,Log "Truthy" or "Falsy" for each value
function Boolean(value) {
    if (value) {
        console.log ("Truthy");
    } else { 
        console.log ("Falsy");}
    }
 console.log(Boolean(0));  //Falsy
 console.log(Boolean(""));  //Falsy
 console.log(Boolean("Hello"));  //Truthy
 console.log(Boolean(42));  //Truthy

//2. Age Eligibility
//Write a script to check if a user is eligible to vote based on their age.
// If the user is 18 or older, log "You are eligible to vote."
// Otherwise, log "You are not old enough to vote."
let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not old enough to vote.");
}

//3. Calculate final Price
//Write a script to calculate the final price of an item after a 20% discount and an 8% tax.
// Use the following:
// Initial price: $150
// Discount rate: 20%
// Tax rate: 8%
// Expected output: $124.20
let initialPrice = 150;
let discountRate = 0.20;
let taxxRate = 0.08;
let discount = initialPrice * discountRate;
let finalPrice = (initialPrice - discount)*taxxRate;
console.log("Original pricce: S<initalPrice>");
console.log("Discount: $<discount>");
console.log("Tax: $<tax>")
console.log("Final Price: $<finalPrice>")

// 4. Nested If Statements for Login
// Write a script to simulate a login system.
let username= "admin";
let password= "password123";
if (username === "admin") {
    if (password === "password123") {
        console.log("Access granted!");
    } else {
        console.log("Incorrect password");
    }
} else { 
    console.log("Unknown User");
}
// 5. Driving Eligibility
// Wrtie a script to check if a person is eligible to drive.
let driveAge = 20;
let hasLicense = true;
if (driveAge >= 16 && hasLicense){
    console.log("You can drive!");
} else { console.log("You need a license to drive.");
}

// 6. Logical Operators Practice
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax today!");
} else {
    console.log("It is a work day.");
}

// 7. Function: Greeting
//Write a function greet(name) that takes a name as a parameter and logs a personalized greeting:
//"Hello, <name>! Welcome to JavaScript class."
let name = "Kate";
function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript class.");
}
// 8. Function: Square a Number
//Write a function square(number) that returns the square of the given number.
//Use the function to calculate and log the square of 5, 7, and 10.
function square(number) {
    return number * number;     
}
console.log (square(5)); //25
console.log (square(7)); //49
console.log (square(10)); //100

// 9. Function with Default Parameters
//Write a function calculateDiscount(price, discountRate = 0.1) that:
//Calculates the discount on a given price.
//Logs "Discount: $<discount>" and "Final Price: $<finalPrice>".
//Call the function with:
// price = 100 and no discount rate (use default). 
// price = 200 and discountRate = 0.2.
function calculateDiscount(price, discountRate = 0.1) {
    let discount = price * discountRate;
    let finalPrice = price - discount;
    console.log("Discount: $" + discount);
    console.log("Final Price: $" + finalPrice);
}
let price1 = 100;
let price2 = 200;
calculateDiscount(price1);
calculateDiscount(price2, 0.2);

// 10. Tax and Discount Calculator
// Write a function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) that:
// Calculates the discounted price.
// Adds tax to the discounted price.
// Logs:
// "Original Price: $<price>"
// "Discount: $<discount>"
// "Tax: $<tax>"
// "Final Price: $<finalPrice>"
// Call the function with:
// price = 100 (use default)
// price = 250, discountRate = 0.2, and taxRate = 0.1.
function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) { 
    let discount = price * discountRate;
    let discountedPrice = price - discount;
    let tax = discountedPrice * taxRate;
    let finalPrice = discountedPrice + tax;
    console.log("Original Price: $" + price);
    console.log("Discount: $" + discount);
    console.log("Tax: $" + tax);
    console.log("Final Price: $" + finalPrice);
}
let price3 = 100;
let price4 = 250;
calculateFinalPrice(price3);
calculateFinalPrice(price4, 0.2, 0.1);
