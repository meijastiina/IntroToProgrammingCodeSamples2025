let name = "Joe";
let age = 21;
let number = 1;

let sentence = "JavaScript is fun!";

process.stdout.write(name);
process.stdout.write(age.toString());
// age = age.toString();
//process.stdout.write(age);
process.stdout.write((number + age).toString());

let wordsArray = sentence.split("i");
console.table(wordsArray);