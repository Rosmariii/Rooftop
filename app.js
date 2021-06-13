const express = require('express')

const app = express()

const path = require('path')

const bodyParser = require('body-parser')

const products = require('./products')

const fs = require('fs')
const { json } = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(req, res){
    
        res.json()
})

app.get('/products', function(req, res){
        console.log(req.query.page)

        
        let results = [...products]

        if (Object.keys(req.query).length > 0) {

            if (req.query.price_min) {
                results = results.filter(function (product) {
                    return Number(product.price.replace('$', '')) >= req.query.price_min
    
                })
            }
            if (req.query.price_max) {
                results = results.filter(function (product) {
                    return Number(product.price.replace('$', '')) <= req.query.price_max
    
                })
            }

        } else {
            results = products.slice(0, 10)
        }
        if (req.query.hasOwnProperty('page')) {
    
    
            if(req.query.page) {
                if (req.query.page > 0) {
                    start = req.query.page * 10
                    end = start+10
                    results = results.slice(start, end)
                }
            }
        }


        res.json(results)
})

app.get('/products/:id', function(req, res){

        let product = products.find(function (product) {
            return product.id == req.params.id
        }) 

        res.json(product)
})

app.post('/products', function(req, res){
    
    let newProduct = {
        id : Date.now(),
        description: '',
        isVisible: false,
        ...req.body
    }

    let content = fs.readFileSync('./products.json', {encoding:'utf8'})
    let array = JSON.parse(content)
    array.push(newProduct)
    content = JSON.stringify(array)
    fs.writeFileSync('./products.json', content)

    /*if(true){
        return res.status(403).json({message: "Cannot post"})
    }*/
        res.status(201).json({message: "created", "id": newProduct.id})
    })

app.patch('/products/:id', function(req, res){

    let productIndex = products.findIndex(item => item.id == req.params.id)
    let newValues = req.body
    let newProduct = {
        ...products[productIndex], ...newValues} 
    
    
    let content = fs.readFileSync('./products.json', {encoding:'utf8'})
    let array = JSON.parse(content)
    array[productIndex] = newProduct
    content = JSON.stringify(array)
    fs.writeFileSync('./products.json', content)


    if(productIndex != -1){
        res.status(200).json({message:"updated"})
    } else { 
    res.status(404).json({message:"Not found"})
    }
}) 

app.delete('/products/:id', function(req, res){
    let isDeleted= null
    let content = fs.readFileSync('./products.json', {encoding:'utf8'})
    let array = JSON.parse(content)
    let newArray = array.filter(item => {
        if(item.id != req.params.id) {
            isDeleted = false
            return true
        } else {
            isDeleted = true
            return false
        }
    })

    content = JSON.stringify(newArray)
    fs.writeFileSync('./products.json', content)

    if (isDeleted) {
        res.status(200).json({message: "deleted"})
    } else {
        res.status(404).json({message: "Not Found"})
    }
        
})

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:8000`)
})