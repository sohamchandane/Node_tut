const {readFile, writeFile} = require('fs')

console.log('start');


readFile(
    './content/first.txt', 'utf8',
    (err, result)=>{
        if (err){
            console.log('err', err)
            return ;
        }
        const first = result;
        readFile('./content/subfolder/test.txt', 'utf8', (err, result)=>{
            if (err){
                console.log('err', err)
                return;
            }
            const second = result
            writeFile(
                './content/result_async.txt', 
                `${first} or ${second}`,
                (err, result)=>{
                    if (err){
                        console.log('err', err)
                        return
                    }
                    console.log('done with this task')

                }
            )
        })
    }
)

console.log('starting a new task')