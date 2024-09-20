function getTicketPrice() {
    let age = prompt("Enter your age:");
    age = parseInt(age);
    if (age < 0 || !age) {
        console.log("Invalid input. Please enter a valid age.");
        return; 
    }
    let ticketPrice;
    if (age >= 0 && age <= 5) {
        ticketPrice = "Free entry";
    } else if (age >= 6 && age <= 12) {
        ticketPrice = "50 PHP";
    } else if (age >= 13 && age <= 17) {
        ticketPrice = "100 PHP";
    } else if (age >= 18 && age <= 59) {
        ticketPrice = "200 PHP";
    } else if (age >= 60) {
        ticketPrice = "150 PHP";
    }
    console.log("Your ticket price is: " + ticketPrice);
}

getTicketPrice();
