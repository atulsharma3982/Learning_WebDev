// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection

import express from "express"
import mongoose from "mongoose"
import { Employees } from "./models/employee.js"

await mongoose.connect("mongodb://localhost:27017/company")

const app = express()
const port = 3000

app.use(express.static("public"))

const names = ["Harry", "Ramesh", "Suresh"]
const languages = ["Python", "JavaScript", "C++"]
const cities = ["Tokyo", "Seoul", "Banglore"]

let rand = (a,b) => {
    return (Math.floor(Math.random() * (b-a+1)) + a)
}

app.get('/', (req, res) => {
    res.sendFile()
    // res.send('Cleared')
})

app.get('/create', async (req, res) => {
    let data = []
    for (let i = 0; i < 10; i++){
        let s = rand(50000, 250000)
        data.push({
            name: names[rand(0,2)],
            salary: s-(s%1000),
            language: languages[rand(0,2)],
            city: cities[rand(0,2)],
            isManager: rand(0,1)?true:false
        })
    }
    await Employees.insertMany(data)
    res.send(data)
})

app.get('/clear', async (req, res) => {
    await Employees.deleteMany({})
    res.send('Cleared')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})