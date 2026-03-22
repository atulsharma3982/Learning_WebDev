const express = require('express')
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Using get request")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("Running Post request")
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("Running Put request")
    res.send('Hello World Put!')
}).delete('/', (req, res) => {
    console.log("Running Delete request")
    res.send('Hello World Delete!')
})

app.get('/index', (req, res) => {
    console.log("Using get request for index")
    // res.send('Hello World!')
    res.sendFile("templates/index.html", { root: __dirname })
})

app.get("/api", (req,res) => {
    res.json({a:1,b:2,c:3,d:4,name:["harry","jerry"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})