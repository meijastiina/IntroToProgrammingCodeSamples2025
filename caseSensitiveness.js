process.stdin.on("data", function ( inputFromUser ) {
    let userInput = inputFromUser.toString().trim();
    process.stdout.write("You entered " + userInput);
    if (userInput.toLowerCase() == "meija") {
        process.stdout.write("\nYay\n");
    } else {
        process.stdout.write("\nNo!\n");
    }
});