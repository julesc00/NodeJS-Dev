const request = require('request')

const url = `https://api.darksky.net/forecast/57a875ec67c843f3072670ccb1a54063/37.8267,-122.4233`

const clima = (latitude = 37.8267, longitude = -122.4233) => {
    request({ url: url, json: true }, (response) => {
        console.log(response.body.daily.data[0].summary);
        console.log(response.body.currently.temperature);
        console.log(response.body.currently.precipProbability);

    })
}

clima(37.8267, -122.4233)
