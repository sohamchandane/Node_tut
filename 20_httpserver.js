const { readFileSync } = require('fs');
const http = require('http')
var text, statusCode;

const basicProj = readFileSync('./WithHTMLExample/BasicProj.html')
const baseProjCSS = readFileSync('./WithHTMLExample/baseprojcss.css')
const logo = readFileSync('./WithHTMLExample/pexels-creative-vix-9754.jpg')


const server = http.createServer((req, res)=>{
    console.log(req.url)
     
    if (req.url == '/'){
        statusCode = 200
        res.writeHead(statusCode, {'content-type': 'text/html'})
        res.write(basicProj)
        res.end()
    }

    else if (req.url == '/baseprojcss.css'){
        statusCode = 200
        res.writeHead(statusCode, {'content-type': 'text/css'})
        res.write(baseProjCSS)
        res.end()
    }

    else if (req.url == '/pexels-creative-vix-9754.jpg'){
        statusCode = 200
        res.writeHead(statusCode, {'content-type': 'image/jpg'})
        res.write(logo)
        res.end()
    }

    else{
        statusCode = 404
        res.writeHead(statusCode, {'content-type': 'image/jpg'})
        res.write(logo)
        res.end()
    }
})

server.listen(5500)