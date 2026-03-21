import path from "path"
let myPath = "C:\\coding\\SigmaWebDevelopment\\Video87-fs_and_pathModules\\aboutpath.js"
console.log(path.basename(myPath))
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.join("C:/",myPath.replace("C:\\","")))