const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/birds.js')

// app.use(express.static("public"))
app.use('/birds', birds)

//Middleware 1 - logger
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "harry";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log('m1')
    // res.send("Middleware 1")
    next()
})

//Middleware 2
app.use((req, res, next)=> {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About! ' + req.harry)
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
