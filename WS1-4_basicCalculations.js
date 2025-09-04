/*
1.4 Task 4: Basic Calculations
Create a simple program with the following functionality:
1. Ask for user to input a number.
2. Define a secret number.
3. Perform and print out basic calculations for that number with the secret
number.
*/
// Ask user to enter a number
process.stdout.write("Please enter a number: ");
// Read user input
process.stdin.on("data", function( inputFromUser ) {
    // Create a variables
    let secretNumber = 25;
    let userNumber = Number(inputFromUser);
    process.stdout.write(userNumber + " + " + secretNumber + " = " + (userNumber + secretNumber));
});