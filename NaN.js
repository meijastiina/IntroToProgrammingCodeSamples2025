let x = 4.789;
let y = '4,456';
console.log(isNaN(x));
console.log(isNaN(y));
if (isNaN(y)) {
    console.log(y + " is NOT a number");
} else {
        console.log(y + " IS a number");
}
process.stdout.write