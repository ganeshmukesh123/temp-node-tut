const {readFileSync,writeFileSync} = require("fs");
// const fs = require("fs");
// fs.readFileSync

console.log("Start");

const first = readFileSync("./content/first.txt","utf-8"); 
const second = readFileSync("./content/second.txt","utf-8"); 
// console.log(first);
// console.log(second);

// writeFileSync("./content/first.txt","new content in first.txt");

// writeFileSync("./content/second.txt","new content in second.txt");

writeFileSync("./content/result-sync.txt",`new content in result-sync.txt \nDATA : \n${first} , \n${second} `,{flag:'a'});//create file if not present else overide file
//flag:'a' means append 

console.log("done with this task");
console.log("Starting the next one");