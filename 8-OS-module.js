
//info about current user
const os = require('os')
const user = os.userInfo()


// method returns the system uptime in seconds


console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    CPU: os.cpus(), 
}
console.log(currentOS)