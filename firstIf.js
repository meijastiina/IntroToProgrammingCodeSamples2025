/* 
Ask the user to input a number.
Check if number is 0
If yes -> print out "You entered a zero".
If no -> print out "You entered something else".
*/

//Ask the user to input a number.
process.stdout.write("Enter a number: ");
// Read user input
process.stdin.on("data", function( inputFromUser){
    let number = inputFromUser;
    // Check if number is 0
    if ( number == 0 ) {
        // If yes -> print out "You entered a zero".
        process.stdout.write("You entered zero");
    } else {
        // If no -> print out "You entered something else".
        process.stdout.write("You entered something else");
    }
    // terminate the program
    process.exit();
})
