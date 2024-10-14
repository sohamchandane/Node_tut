const os = require('os')

// info bout curr user
const user = os.userInfo()
console.log(user)

//returns system uptime in secs
console.log(os.uptime())

const curr = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(curr)