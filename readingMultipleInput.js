process.stdout.write("Please enter two numbers separated by spaces\n");

process.stdin.on("data", function ( inputFromUser ) {
    // Split given input and save it in a variable
    let numbers = inputFromUser.toString().split(" ");
    process.stdout.write("First number: " + numbers[0]);
    process.stdout.write("\nSecond number: " + numbers[1]);
});