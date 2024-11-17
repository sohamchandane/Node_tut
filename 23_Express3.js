const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res)=>{
    res.json([
        {
            name: "Soham",
            age: 20
        },
        {
            name: 'John',
            age: 22
        }
    ])
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})