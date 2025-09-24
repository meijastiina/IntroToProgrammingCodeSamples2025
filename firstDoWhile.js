process.stdout.write("Please enter your name: ");
process.stdin.on("data", function( inputFromUser){
    // create an iterator variable
    let counter = 1;
    // repeat 5 times
    do {
        process.stdout.write(inputFromUser);
        counter++;
    } while ( counter <= 5 );
    process.exit();
});
