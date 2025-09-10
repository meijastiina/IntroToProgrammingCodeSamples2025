process.stdout.write("Enter number 1: \n");
let counter = 1;
let number1;
let number2;
process.stdin.on("data", function ( inputFromUser ) {

    if (counter == 1) {
        // this branch happens when user is entering first input
        number1 = Number(inputFromUser.toString());
        counter++;
        process.stdout.write("Enter number 2: \n");
    } else {
        // this branch happens when user is entering second input
        number2 = Number(inputFromUser.toString());
        process.stdout.write("Number 1 is " + number1 + " number2 is " + number2 + "\n");
        process.exit();
    }
});