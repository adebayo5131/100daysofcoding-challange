/*var a = "Hello World";


hello = 'Adebayo Ajagunna'

console.log(a);

console.log(a);*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})