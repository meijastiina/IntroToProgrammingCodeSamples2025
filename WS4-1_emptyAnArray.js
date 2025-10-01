let array3 = [ "Helsinki", "Lissabon", "New York", "Shanghai"];

// Lastly, in a loop go through the array3 and set all the values to be “empty”
for (let index = 0; index < array3.length; index++) {
    array3[index] = "empty";
}

//  and print it out as a comma separated string.
for (let index = 0; index < array3.length; index++) {
    process.stdout.write(array3[index] + ", ");
}

console.table(array3);

process.stdout.write(array3.toString());
process.stdout.write(array3.join("/"));