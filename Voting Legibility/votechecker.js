function checkEligibility() {
    const age = parseInt(document.getElementById('age').value, 10);
    const result = document.getElementById('result');

    if (isNaN(age)) {
        result.textContent = 'Please enter a valid age.';
        result.style.color = 'red';
    } else if (age >= 18) {
        result.textContent = 'You are eligible to vote!';
        result.style.color = 'green';
    } else {
        result.textContent = 'You are not eligible to vote.';
        result.style.color = 'red';
    }
}