const express = require('express')

const app = express()
const port = 5000

const {products} = require('./product')

app.get('/', (req, res)=>{
    res.send('<h1>Home page</h1><a href="/products">Click me</a>')
})

app.get('/products', (req, res)=>{
    res.json(products)
})

app.get('/products/:ProdID', (req, res)=>{
    const {ProdID} = req.params
    const singleProd = products.find((prod) => prod.id == ProdID)
    

    if (!singleProd){
        return res.status(404).send("Product does not exists")
    }

    else{
        return res.json(singleProd)
    }
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})