const express = require('express');

const app = express()
const port = 5050

//app.get: Routes requests to specified paths
app.get('/', (req, res)=>{
    res.send('Home page')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/about/contact', (req, res)=>{
    res.send('Contact Me')
})

//app.all: Used to route all types of HTTP request
app.all('*', (req, res) => {
    res.status(404)
    res.send('Page not found')
})

//app.listen
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})

//app.post
//app.put
//app.delete
//app.use