const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/82aa659d8b5809cab048c9feb41a1528/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + ((body.currently.temperature-32)*5/9).toFixed(2) + ' degrees out.\n The wind speeds are '+body.currently.windSpeed+'mph and there is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast