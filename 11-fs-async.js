const {readFile,writeFile} = require("fs");

console.log("Start");

readFile("./content/first.txt","utf8",(err,res)=>{//check removing utf8 field
    if(err){
        console.log(err);
        return;
    }
    // console.log(res);
    const first = res;
    readFile("./content/second.txt","utf8",(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log(res);
        const second = res;
        writeFile("./content/result-async.txt",`new content in result-async.txt \nDATA : \n${first} , \n${second} `,(err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(res);
            console.log("done with task");
        })
    });
});
console.log("ready for next iterartion");