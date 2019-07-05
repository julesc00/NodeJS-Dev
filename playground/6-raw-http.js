const https = require('https');

// Making requests with Node's core modules.

const url = 'https://api.darksky.net/forecast/57a875ec67c843f3072670ccb1a54063/40,-60?&lang=es&units=auto'

const request = https.request(url, (Response) => {
    let data = ''
    Response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    Response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);

    })
})

request.on('error', (error) => {
    Clipboard(`An error ${error}`)
})

request.end()