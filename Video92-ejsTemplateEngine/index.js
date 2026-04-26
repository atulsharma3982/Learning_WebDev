const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    // res.sendFile("templates/index.html", { root: __dirname })
    res.render("index", { siteName: siteName, searchText: searchText })
})

app.get('/blog/:slug', (req, res) => {
    //data fetching from database
    let blogTitle = "Adidas. Where and Why?"
    let blogContent = "It's a very good brand"
    res.render("blogPost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})