// builtin module
const os = require("os");//'os' builtin module
console.log(os.version());//Windows 10 Pro
console.log(os.freemem());//Returns the amount of free system memory in bytes as an integer.
console.log(os.userInfo());//info of current user
console.log(`system uptime in ${os.uptime()} second`);//uptime

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);