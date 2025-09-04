/* 
1.2 Task 2: Distance Converter version 0.1
Create a simple program that converts distance given in miles to
kilometers. Print out the output with basic write() and also with
util.format().
*/

// Print out the starting message
process.stdout.write("\n\n\nThis is a distance converter program. Please enter distance in miles: ");
// Read user input
process.stdin.on("data", function( inputFromUser) {
    // Create variables and Convert distance in miles into kilometers
    let distanceInMiles = inputFromUser; // the distance user entered (in miles)
    let distanceInKilometers = 1.6093 * distanceInMiles; // the calculated distance (in kilometers)
    // print out the result
    // process.stdout.write(distanceInMiles.toString().trim() + " mile(s) is " + distanceInKilometers + "km.");
    process.stdout.write(Number(distanceInMiles) + " mile(s) is " + distanceInKilometers + "km.");
    // Terminate the program
    process.exit();
});
