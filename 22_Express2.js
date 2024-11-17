const express = require('express');
const path = require('path')

const app = express()
const port = 5050


//METHOD 1
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'WithHTMLExample/BasicProj.html'))
})

//app.use : Adds all middleware dependencies and required files
app.use(express.static('./public'))

//express.static = A static asset is an asset (or file or folder) where in server doesn't need to change it

// ALT METHOD: If all files are directly in 'public' i.e static asset
// app.use(express.static('./public'))

app.all('*', (req, res) => {
    res.status(404)
    res.send('Page not found')
})


app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})