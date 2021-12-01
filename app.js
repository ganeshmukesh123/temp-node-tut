
// gobal variable in node
// __dirname
// __filename
// require
// module
// process => env
// etc




// modules  encapsulation  (only minimum sharing of code)
// import * as names from './names.js';
// const names = require('./names');
// // const {johan,peter} = require('./names');
// const sayHi = require('./utils');
// const data = require("./alternative-syntax");
// const data2 =  require("./mind-grenade");
// // console.log(data2.addValue());

// sayHi("ueer1");
// sayHi("ueer5");
// sayHi(names.johan);
// sayHi(names.lenny);
const http = require("http");
//request , response
const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url == '/'){
        // res.write("Welcome to homepage");
        // res.end();
        res.end("Welcome to homepage");
    }
    if(req.url == '/about'){
        // res.write("Welcome to about page");
        // res.end();
        res.end("Welcome to about page");
    }

    // res.write(`
    //     <h1>Oops!!</h1>
    //     <p>use following link to go back</p>
    //     <a href="/">BACK</a>
    // `);
    // res.end();
    // res.end(`
    //     <h1>Oops!!</h1>
    //     <p>use following link to go back</p>
    //     <a href="/">BACK</a>
    // `);
})
server.listen(5000);


// npm info
// npm --version gives version
// npm install <packagename> install package to local i.e for project
// nom install -g <packagename> install package to global
// package.json <== manifest file (store info  about project/packages) 
// we can manual create package.json and add properties to it
// or
// npm init and than follow step
// npm init -y <== this add default porperties

const _ = require("lodash");

const items = [1,[2,[3,[4]]]];
const newItems =  _.flatMapDeep(items)
console.log(newItems);
console.log("Hello guys");