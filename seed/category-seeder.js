const mongoose = require('mongoose')
const appConfig = require('../app-config')
const Category = require('../models/Category')

mongoose.connect(appConfig.mongoURL, { useNewUrlParser: true })

const category = [
    new Category({
        name: 'Новые',
        imagePath: ' '
    }),
    new Category({
        name: 'Хиты продаж',
        imagePath: ' '
    }),
    new Category({
        name: 'Платья',
        imagePath: 'product/eight.jpg'
    }),
    new Category({
        name: 'Спортивные костюмы',
        imagePath: 'product/one.jpg'
    })
]



let done = 0
for (let i = 0; i < category.length; i++) {
    category[i].save((err, result) => {
        done++
        if (done === category.length) {
            exit()
        }
    })
}

const exit = () => {
    mongoose.disconnect()
}