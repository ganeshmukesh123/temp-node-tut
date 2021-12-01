
// gobal variable in node
// __dirname
// __filename
// require
// module
// process => env
// etc




// modules  encapsulation  (only minimum sharing of code)
// import * as names from './names.js';
const names = require('./names');
// const {johan,peter} = require('./names');
const sayHi = require('./utils');
const data = require("./alternative-syntax");
const data2 =  require("./mind-grenade");
// console.log(data2.addValue());

// sayHi("ueer1");
// sayHi("ueer5");
// sayHi(names.johan);
// sayHi(names.lenny);