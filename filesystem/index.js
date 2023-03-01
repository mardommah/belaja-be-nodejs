const fs = require("fs")
const path = require("path")

const file_path = path.resolve(__dirname, "notes.txt")

try{
    const data = fs.readFileSync(file_path, 'utf-8')
    console.log(data)
} catch(err){
    console.log("File tidak dtemukan")
}
