/* 
1.3 Task 3: Distance Converter version 0.2
Extend the functionality from the previous task to:
1. Ask for the distance in meters.
2. Also convert the distance to following units:
o kilometers
o miles
o yards
o feet
o inches
o light years
3. Show numbers with three decimals.
Hint! If you want to align the results, you can use padStart() function to add empty spaces to make the
string equal length. (OPTIONAL)
*/
const util = require( "util"); 

// Print out the starting message
process.stdout.write("\n\n\nThis is a distance converter program. Please enter distance in meters: ");
// Read user input
process.stdin.on("data", function( inputFromUser) {
    // Create variables
    let distanceInMeters = inputFromUser; // the distance user entered (in meters)
    let distanceInKilometers = distanceInMeters / 1000; // the calculated distance (in kilometers)
    // print out the result
    process.stdout.write(Number(distanceInMeters).toFixed(2) + " meter(s) is:");
    process.stdout.write(util.format("\n%d km", distanceInKilometers.toFixed(2)));
    process.stdout.write("\n" + (distanceInMeters / 1609).toFixed(2) + " miles");
    process.stdout.write("\n" + (distanceInMeters / 0.9144).toFixed(2) + " yards");
    // Terminate the program
    process.exit();
});
