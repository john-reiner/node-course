const http = require('http')

url = `http://api.weatherstack.com/current?access_key=79a76f2346853bce29476e23b04cc23a&query=45,-75&units=f`

const request = http.request(url, (response) => {

    let data = ''


    response.on('data', (chunk) => {
        data = data + chunk.toString()
    }) 

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log("An error has occured... ",error)
})

request.end()