const express = require('express')

const app = express()

const path = require('path')

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(req, res){
let file = path.resolve('src', 'index.html')

    res.sendFile(file)
})


app.post('/', function(req, res){
    res.send(req.body)
})


app.get('/viejo', function(req, res){
    res.redirect('./nuevo')
})


app.get('/nuevo', function(req, res){
    res.send('esta es la app')
})


app.listen(8000)