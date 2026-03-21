const { error } = require("console");
const fs = require("fs")

console.log("starting")
// fs.writeFileSync("hello.txt", "Hello, Welcome", () => {
//     console.log("done")
// })
fs.writeFile("hello2.txt", "Hello again, Welcome", () => {
    console.log("done");
    fs.readFile("hello2.txt", (error, data) => {
        console.log(error, data.toString());
    })
})

fs.appendFile("hello.txt", "helloooo", (e, d) => {
    console.log(e,d)
})
console.log("ending")