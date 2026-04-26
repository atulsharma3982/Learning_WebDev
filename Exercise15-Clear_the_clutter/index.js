const fs = require('node:fs')
const path = require('node:path')
let filenames

// const isFile = fileName => {
//     return fs.lstatSync(fileName).isFile()
// }

const folderPath = 'C:\\coding\\SigmaWebDevelopment\\Exercise15-Clear_the_clutter'

filenames = fs.readdirSync(folderPath)
// console.log(filenames)
// /users/joe
// console.log(dirna)
// path.basename(notes) // notes.txt
// path.extname(notes) // .txt
// import { rename } from 'node:fs'
for (const file of filenames) {
    const ext = path.extname(file).replace('.', '')
    console.log(ext)
    const oldPath = path.join(folderPath, file)
    const newPath = path.join(folderPath, ext, file)
    // console.log(newPath)
    const folderName = path.join(folderPath, ext)
    try {
        if (!fs.existsSync(folderName) && ext != "js" && ext != "json") {
            fs.mkdirSync(folderName)
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err
                // console.log('Rename complete!')
            })
        }
        else if (fs.existsSync(folderName) && ext != "js" && ext != "json") {
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err
                // console.log('Rename complete!')
            })
        }
    } catch (err) {
        console.error(err)
    }

}
