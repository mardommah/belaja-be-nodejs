const fs = require('fs');

const path = require('path')

const article_path = path.resolve(__dirname, "article.txt")
 
const readableStream = fs.createReadStream(article_path, {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});


// result membaca per 10 bytes / 10 huruf (1 bytes = 1 angka) 
/**
 * [Stream di ][Node.js
 
][Teknik str][eam merupa][kan salah ][satu konse][p fundamen][tal yang m][endukung a][plikasi No][de.js beke][rja. Tekni][k ini dapa][t menangan][i kasus ba][ca tulis b][erkas, kom][unikasi ja][ringan, at][au beban k][erja apapu][n agar dap][at berjala][n dengan l][ebih efisi][en.][null]Done
 */