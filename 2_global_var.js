// __dirname: path to curr directory
// __filename: name of file
// require: func to use modules
// module: info about curr module (file)
// process: info about env where program is being execute

console.log(`dirname: ${__dirname}`);
console.log(`filename: ${__filename}`);

console.log('\n');
console.log(require);

console.log('\nModule');
console.log(module);
console.log(module.path);

console.log('\n');
console.log(process);

setInterval(
    (a = Math.random())=>{console.log(`Number: ${a.toFixed(3)}`)}, 1000

)