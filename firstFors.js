// Print 0-10
for( let i = 0; i <= 10; i++) {
    process.stdout.write(i.toString() + " ");
}
process.stdout.write("\n---- 10-0 -----\n");
// Print 10-0
for( let i = 10; i >= 0; i--) {
    process.stdout.write(i.toString() + " ");
}