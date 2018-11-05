const mongoose = require('mongoose')
const appConfig = require('../app-config')
const Product = require('../models/Product')

mongoose.connect(appConfig.mongoURL, { useNewUrlParser: true })

const product = [
    new Product({
        imagePath: 'product/one.jpg',
        title: 'Костюм',
        sku: '401',
        description: 'Пример описания',
        price: 500,
        priceWholesale: 450
    }),
    new Product({
        imagePath: 'product/two.jpg',
        title: 'Костюм',
        sku: '402',
        description: 'Пример описания',
        price: 510,
        priceWholesale: 450
    }),
    new Product({
        imagePath: 'product/three.jpg',
        title: 'Костюм',
        sku: '403',
        description: 'Пример описания',
        price: 520,
        priceWholesale: 450,
        is_new: true
    }),
    new Product({
        imagePath: 'product/four.jpg',
        title: 'Костюм',
        sku: '404',
        description: 'Пример описания',
        price: 530,
        priceWholesale: 450,
        is_new: true
    }),
    new Product({
        imagePath: 'product/five.jpg',
        title: 'Костюм',
        sku: '405',
        description: 'Пример описания',
        price: 600,
        priceWholesale: 450,
        is_new: true
    }),
    new Product({
        imagePath: 'product/six.jpg',
        title: 'Костюм',
        sku: '406',
        description: 'Пример описания',
        price: 450,
        priceWholesale: 450
    }),
    new Product({
        imagePath: 'product/seven.jpg',
        title: 'Костюм',
        sku: '407',
        description: 'Пример описания',
        price: 400,
        priceWholesale: 450,
        is_new: true
    }),
    new Product({
        imagePath: 'product/eight.jpg',
        title: 'Костюм',
        sku: '408',
        description: 'Пример описания',
        price: 550,
        priceWholesale: 450
    })
]


let done = 0
for (let i = 0; i < product.length; i++) {
    product[i].save((err, result) => {
        done++
        if (done === product.length) {
            exit()
        }
    })
}

const exit = () => {
    mongoose.disconnect()
}