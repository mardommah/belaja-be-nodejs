const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage'
        }
    },
    {
        method: "*",
        path: '/',
        handler : (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page'
        }
    },
    {
        method: "*",
        path: '/about',
        handler : (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        method: "GET",
        path: '/hello/{name?}', //path parameter
        handler : (request, h) => {
            const {name = "stranger"} = request.params
            const { lang } = request.query

            if(lang === 'id'){
                return `Hai, ${name}`
            }

            return `Hello, ${name}`
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
]

/**
 * 
 * usahakan penulisan path parameter diakhir jika di tengah dan dengan tanda opsional maka akan dianggap tidak valid oleh hapi
 * @example /{one?}/{two}
 * 
 * tanda ? di akhir parameter berarti opsional
 */


module.exports = routes;