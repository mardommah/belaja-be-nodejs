/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const path = require('path')
const fs = require('fs')

const path_text = path.resolve(__dirname, "input.txt")

const read_file = fs.createReadStream(path_text, {
    highWaterMark: 15,
    encoding: 'utf-8'
})

const writeLocation = fs.createWriteStream(path.resolve(__dirname, "output.txt"))



read_file.on('readable', ()=>{
    try{
        writeLocation.write(`${read_file.read()}\n`)
    } catch (err){
        // console.log(err)
    }
})

read_file.on('end', ()=>{
    console.log("done")
})