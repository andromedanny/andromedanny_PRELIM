function generateSequence() {
    //step1
    let start = prompt("Enter the starting number:");
    let end = prompt("Enter the ending number:");
    let step = prompt("Enter the step value (non-zero):");
    start = parseInt(start);
    end = parseInt(end);
    step = parseInt(step);

    //step2
    if (start === null || end === null || step === null || step === 0 || !Number.isInteger(start) || !Number.isInteger(end) || !Number.isInteger(step)) {
        console.log("Invalid input. Please ensure you entered valid numbers and the step is non-zero.");
        return;
    }

    //step3
    console.log("Generated sequence:");

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            console.log(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            console.log(i);
        }
    }
}
generateSequence();
