const {readFileSync, writeFileSync} = require('fs')

console.log('start');


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/test.txt', 'utf8')

const w = writeFileSync(
    './content/result.txt', 
    `${first} and ${second}`,
    {flag: 'a'}
)

console.log('done with this task')
console.log('starting with new')