document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Correct answers
    const correctAnswers = {
        q1: 'Ala Vaikunthapurramuloo',
        q2: 'S.S. Rajamouli',
        q3: 'Sita Ramam'
    };

    // Initialize score
    let score = 0;

    // Check each question
    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        
        // If the selected answer is correct, increase the score
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display the result
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
});