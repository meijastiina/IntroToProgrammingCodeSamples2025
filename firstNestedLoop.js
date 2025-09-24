// create variables 
let row = 0;
let col = 0;
for (let row = 0; row <= 9; row++ ) {   
    for (let col = 0; col <= 9; col++ ) {       
        process.stdout.write("(" + row + "." + col + ")");
    }
    // a row has been printed -> new line
    process.stdout.write("\n");
}