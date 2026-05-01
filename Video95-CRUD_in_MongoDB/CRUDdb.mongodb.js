use("CRUDdb")

// console.log(db)
db.createCollection("courses")

//CREATE
// db.courses.insertOne({
//     "name": "Harry's Web Dev Free Course",
//     "price": 0,
//     "Assigments": 12,
//     "projects": 45
// })

// db.courses.insertMany([
//     {
//         "name": "Harry's Web Dev Free Course",
//         "price": 0,
//         "Assigments": 12,
//         "projects": 45
//     },
//     {
//         "name": "Beginner Python Bootcamp",
//         "price": 499,
//         "Assigments": 10,
//         "projects": 20
//     },
//     {
//         "name": "Advanced Java Programming",
//         "price": 1999,
//         "Assigments": 18,
//         "projects": 30
//     },
//     {
//         "name": "Full Stack Web Development",
//         "price": 2999,
//         "Assigments": 25,
//         "projects": 50
//     },
//     {
//         "name": "Data Structures & Algorithms",
//         "price": 1499,
//         "Assigments": 22,
//         "projects": 15
//     },
//     {
//         "name": "Machine Learning Basics",
//         "price": 2499,
//         "Assigments": 16,
//         "projects": 18
//     },
//     {
//         "name": "React JS Crash Course",
//         "price": 999,
//         "Assigments": 8,
//         "projects": 12
//     },
//     {
//         "name": "Cyber Security Essentials",
//         "price": 1799,
//         "Assigments": 14,
//         "projects": 10
//     },
//     {
//         "name": "DevOps Fundamentals",
//         "price": 2199,
//         "Assigments": 11,
//         "projects": 9
//     },
//     {
//         "name": "Mobile App Development",
//         "price": 2699,
//         "Assigments": 20,
//         "projects": 25
//     }
// ])

//READ
// let a = db.courses.find({ price: 2199 })
// console.log(a.count())
// console.log(a.toArray())
// console.log(a)
// let a = db.courses.findOne({ price: 0 })
// console.log(a)

//UPDATE
// db.courses.updateOne({ price: 0 }, { $set: { price: 500 } })
db.courses.updateMany({ price: { $lte: 999 } }, { $set: { price: 1099 } })

//DELETE
// db.courses.deleteOne({price: 1099})
db.courses.deleteMany({price: 1099})