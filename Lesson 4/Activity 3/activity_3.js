//task 1 Arithmetic Calculator
//step 1
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
//step 2
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
//step 3
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

//task 2 Age Validator
//step 1
let age = parseInt(prompt("Enter your age: "));
//step 2
let isAdult = age >= 18;
//step 3
if (isAdult) {
    alert("You are an adult. ");
    } else {
    alert("You are not an adult. ");
    }
