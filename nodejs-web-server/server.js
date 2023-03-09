// console.log("selaat datang !!")
const http = require('http')

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {
    const {method, url} = request

    response.setHeader('Content-Type', 'application/json');
    // custom header diberikan keterangan X di depannya
    response.setHeader('X-Powered-By', "NodeJS")

    /**
     * Membuat Basic Routing
     */

    if (url === '/'){
        if (method == "GET"){
            // status code success
            response.statusCode = 200
            response.end(JSON.stringify({
                message: "ini adalah homepage"
            }))
        } else {
            // status code not found
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`
            }))
        }
    } else if (url === '/about'){
        if (method === "GET"){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: "ini adalah halaman about"
            }))
        } else if (method === "POST"){
            let body = []
            
            request.on('data', (chunk) => {
                body.push(chunk)
            })

            request.on('end', () => {
                body = Buffer.concat(body).toString()
                const {name} = JSON.parse(body)
                response.statusCode = 200
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`
                }))
            })

            
        } else {
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request.`
            }))
        }
    } else {
        response.statusCode = 404
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan'
        }))
    }
    /**
     * body akan di consume jika request end ter-trigger
     * server tidak akan mengirim respon bila proses stream belum selesai
     */

}

// inisialisasi pembuatan server
const server = http.createServer(requestListener)

const port = 9999;
const host = 'localhost'

/**
 * Method listen() dapat menerima 4 parameter, berikut detailnya:
 * port (number) : jalur yang digunakan untuk mengakses HTTP server.
 * hostname (string) : nama domain yang digunakan oleh HTTP server.
 * backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
 * listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
 */

server.listen(port, host, () => {
    console.log(`Server berjalan di port ${port}`)
})