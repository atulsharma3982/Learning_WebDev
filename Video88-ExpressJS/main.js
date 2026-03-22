const express = require('express')
const app = express()
const port = 3000
//public-foldername which contains static files(html,css,txt etc.) to be made public ie. access via url
//by default everything is private
app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About me')
})

app.get('/contact', (req, res) => {
    res.send('Contact me')
})

app.get('/blog', (req, res) => {
    res.send('My blog')
})

app.get('/blog/:slug/:second', (req, res) => {
    // console.log(req);
    // for url: 
    console.log(req.path);
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.params.slug} and ${req.params.second} and`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Intro to js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Intro to python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
