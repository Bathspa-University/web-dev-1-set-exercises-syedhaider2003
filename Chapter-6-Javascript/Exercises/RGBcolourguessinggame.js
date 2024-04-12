const rgbValueDisplay = document.getElementById('rgb-value');
const colorOptionsContainer = document.getElementById('color-options');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let score = 0;
let lives = 3;

// Generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate a question with color options
function generateQuestion() {
    const rgbValue = generateRandomColor();
    const correctOptionIndex = Math.floor(Math.random() * 3);

    rgbValueDisplay.textContent = rgbValue;
    colorOptionsContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const colorOption = document.createElement('div');
        colorOption.classList.add('color-option');
        colorOption.style.backgroundColor = i === correctOptionIndex ? rgbValue : generateRandomColor();
        colorOption.addEventListener('click', () => handleOptionClick(i === correctOptionIndex));
        colorOptionsContainer.appendChild(colorOption);
    }
}

// Handle click on color option
function handleOptionClick(correct) {
    if (correct) {
        messageDisplay.textContent = 'Correct!';
        score++;
    } else {
        messageDisplay.textContent = 'Incorrect!';
        lives--;
    }

    updateScore();

    if (lives > 0) {
        generateQuestion();
    } else {
        endGame();
    }
}

// Update score display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score} | Lives: ${lives}`;
}

// End the game
function endGame() {
    messageDisplay.textContent = `Game Over! Final Score: ${score}`;
    restartButton.style.display = 'block';
}

// Restart the game
function restartGame() {
    score = 0;
    lives = 3;
    updateScore();
    generateQuestion();
    messageDisplay.textContent = '';
    restartButton.style.display = 'none';
}

// Event listener for restart button
restartButton.addEventListener('click', restartGame);

// Start the game
generateQuestion();
