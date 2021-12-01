const path = require("path");
console.log(path.sep);
const filePath = path.join("/content","subfolder","test.txt"); //nprmalize path
console.log(filePath);

const base = path.basename(filePath);
console.log(base); //display test.txt

const absolute = path.resolve(__dirname,"content","subfolder","test.txt");//absolute path
console.log(absolute);