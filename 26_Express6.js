const express = require('express')
const app = express()
const logger = require('./logger')
 
// req ---> middleware ---> res

// const logger = (req, res, next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     next()
// }

// No need to manually add 'logger' to each get, use app.use(logger) method. ORDER MATTERS: THE MIDDLEWARE MUST BE ABOVE ALL THOSE app.get WHICH REQUIRE THAT MIDDLEWARE

app.use(logger)
// app.use('/api', logger): middleware applied to all those url with ../api/..
// for multiple middleware: app.use([middleware1, middleware2, middleware3..]), execution of middleware sequence is as given in array 
app.get('/', (req,res)=>{
    res.send(`Home`)
})

app.get('/about', (req,res)=>{
    res.send("About")
})

app.get('/api/products', (req,res)=>{
    res.send("Products")
})

app.get('/api/items', (req,res)=>{
    res.send("Items")
})

app.listen(5000, ()=>{
    console.log("Server listening to 5000")
})