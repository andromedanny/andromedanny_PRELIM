function calculateGrade() {

    const studentName = document.getElementById('studentName').value;
    const quiz1 = parseFloat(document.getElementById('quiz1').value);
    const quiz2 = parseFloat(document.getElementById('quiz2').value);
    const quiz3 = parseFloat(document.getElementById('quiz3').value);


    if (!validateScore(quiz1) || !validateScore(quiz2) || !validateScore(quiz3)) {
        alert('SCORES MUST BE HIGHER THAN -1 AND NOT EXCEEDING 100');
        return;
    }


    const averageScore = (quiz1 + quiz2 + quiz3) / 3;
    

    let letterGrade = '';
    if (averageScore >= 90 && averageScore <= 100) {
        letterGrade = 'A';
    } else if (averageScore >= 80 && averageScore < 90) {
        letterGrade = 'B';
    } else if (averageScore >= 70 && averageScore < 80) {
        letterGrade = 'C';
    } else if (averageScore >= 60 && averageScore < 70) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

   
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Student Name: ${studentName}</h3>
    <p>Average Score: ${averageScore.toFixed(2)}</p>
    <p>Letter Grade: ${letterGrade}</p>`;
}

function validateScore(score) {
    return score >= 0 && score <= 100;
}