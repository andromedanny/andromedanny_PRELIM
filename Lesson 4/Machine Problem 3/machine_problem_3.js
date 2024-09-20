//task 1
let principal = parseFloat(prompt("Enter the principal amount (P):"));
let rate = parseFloat(prompt("Enter the annual interest rate (R in %):"));
let time = parseFloat(prompt("Enter the time period in years (T):"));
//task 2
let simpleInterest = (principal * rate * time) / 100;
//task 3
let totalAmount = principal + simpleInterest;
//task 4
console.log("Simple Interest: " + simpleInterest.toFixed(2));
console.log("Total Amount to be paid: " + totalAmount.toFixed(2));
