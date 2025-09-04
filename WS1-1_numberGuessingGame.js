/* 1.1 Task 1: Number Guessing Game
Create a simple game in which the user has to guess the secret number. Game has the following
functionality:
1. Program asks the user to enter a number.
2. Set secret number to be entered number plus one.
3. Print out whether the user won or not.
*/

// Ask the user to enter a number
process.stdout.write("\n\n\nThis is a computer game. Try to guess my number! What is your guess?");

// Read user input
process.stdin.on("data", function( inputFromUser) {
    // Print out the message of the outcome for the user
    process.stdout.write("You typed in " + inputFromUser);
    let secretNumber = Number(inputFromUser) + 1;
    process.stdout.write("The secret number is " + secretNumber + "\n\n\n");
    // terminate the program
    process.exit();
});