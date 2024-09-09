const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req, res) => {
    console.log('Obteniendo productos')
})

app.post('/products', (req, res) => {
    console.log('Creando productos')
})


app.put('/products', (req, res) => {
    console.log('Actualizando productos')
})


app.delete('/products', (req, res) => {
    console.log('Eliminando productos')
})


app.get('/products/:id', (req, res) => {
    console.log('Obteniendo un producto')
})

app.listen(3000)
console.log(`Server on port ${3000}`)