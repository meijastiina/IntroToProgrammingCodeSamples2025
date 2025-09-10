process.stdout.write("Please enter three numbers separated by spaces\n");

process.stdin.on("data", function ( inputFromUser ) {
    // Split given input and save it in a variable
    let numbers = inputFromUser.toString().split(" ");
    let number1 = Number(numbers[0]);
    let number2 = Number(numbers[1]);
    let number3 = Number(numbers[2]);
    let greatest = number1;
    
    if ( number1 < number2 ) {
        greatest = number2;
    }
    if ( number3 > greatest ) {
        greatest = number3;
    }
    process.stdout.write("Highest number is " + greatest);
});