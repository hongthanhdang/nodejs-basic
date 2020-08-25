var fs = require("fs");
 
function readFinishedFile1(err,data1){
    if(err) console.log(err);
    console.log("- Data of file 1:");
    console.log(data1.toString());
    console.log(data2);
}

function readFinishedFile2(err,data2){
    if(err) console.log(err);
    console.log("- Data of file 2:");
    console.log(data2.toString());
}
// -----> Read file 1:
console.log("\n");
console.log("Read File 1");
 
var data1 = fs.readFile('/Users/thanhdh/Documents/souces/js/test/file1.txt',readFinishedFile1);
 
// console.log("- Data of file 1: ");
// console.log(data1.toString());
 
 
// -----> Read file 2:
console.log("\n");
console.log("Read File 2");
 
var data2 = fs.readFile('/Users/thanhdh/Documents/souces/js/test/file2.txt',readFinishedFile2);
// console.log("- Data of file 2: ");
// console.log(data2.toString());
 
 
console.log("\n");
console.log("Program Ended");