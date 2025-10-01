/*
Create a program that keeps asking the user to input
numbers. 
These numbers are stored in an array. 
Keep asking till zero is entered. 
After that the numbers are printed out in a reverse order. 
Don’t use array methods for this but only
simple loops.
*/

// Create variables
let number; // number user has entered
let numbers = []; // an array to save all the numbers

// Ask the user to enter a number
process.stdout.write("\nEnter a number: ");

// read user input
process.stdin.on("data", function ( inputFromUser ) {
    // store user input into our number variable
    number = Number(inputFromUser);   
    // Store entered number in an array
    numbers.push(number);
    // if something else than a zero is entered
    if ( number != 0 ) {
        // Ask the user to enter a number
        process.stdout.write("Enter a number: "); 
    } else {
        // numbers are printed out in a reverse order. 
        for ( let i = numbers.length -1; i >= 0; i-- ) {
            // print the number
            process.stdout.write(numbers[i] + " ");
        }
        // end program
        process.exit();
    }

});
