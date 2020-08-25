var fs = require("fs");
 
// -----> Read file 1:
console.log("\n");
console.log("Read File 1");
 
var data1 = fs.readFileSync('/Users/thanhdh/Documents/souces/js/test/file1.txt');
 
console.log("- Data of file 1: ");
console.log(data1.toString());
 
 
// -----> Read file 2:
console.log("\n");
console.log("Read File 2");
 
var data2 = fs.readFileSync('/Users/thanhdh/Documents/souces/js/test/file2.txt');
console.log("- Data of file 2: ");
console.log(data2.toString());
 
 
console.log("\n");
console.log("Program Ended");