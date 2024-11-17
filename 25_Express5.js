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


app.get('/api/v1/query', (req, res)=>{
    // console.log(req.query);
    // res.send(req.query)

    const {search, limit} = req.query;
    let sortedProds = [...products]

    if (search){
        sortedProds = sortedProds.filter((p)=> {return p.name.startsWith(search)}
    )
    console.log(sortedProds)}

    if (limit){
        sortedProds = sortedProds.slice(0,Number(limit))
    }
    console.log(sortedProds)
    res.status(200).json(sortedProds)
})


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})