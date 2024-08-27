const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(`Answer: ${answer}`); // This logs the correct answer, so you can compare your guess directly

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} to ${maxNum}`);
    console.log(`You guessed: ${guess}`); // Log the guess to see what you entered

    guess = Number(guess);
    console.log(`Converted guess: ${guess}, Answer: ${answer}`); // Log after conversion to ensure it’s a number

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`Number out of range, babe! It’s gotta be between ${minNum} and ${maxNum}. Try again, okay? `);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW!!! TRY AGAIN");
        } else if (guess > answer) {
            window.alert("TOO HIGH!!!! YOU CAN DO BETTER");
        } else {
            window.alert(`CORRECT!!!!!! The answer was ${answer}, and it only took you ${attempts} attempts! You're fucking amazing! `);
            running = false;
        }
    }
}
