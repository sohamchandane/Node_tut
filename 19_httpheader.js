const http = require('http')
var count = 0

// const server = http.createServer((req, res)=>{
//     count++;
//     console.log('User hit the server ' + count)
//     res.end('homepage ' + count)
// })

//Above code does not provide meta data and more info of response to browser

const server = http.createServer((req, res)=>{
    //writeHead() provide meta data about our response
    res.writeHead(200, {'content-type': 'text/plain'})//content-type: decides how the content in writing (write or in res.end()) is treated
    res.write('<h1>home page</h1>')
    res.end()

    //OR
    //res.end('<h1>home page</h1>')
})

server.listen(5000)