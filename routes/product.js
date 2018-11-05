const express = require('express')
const router = express.Router()

// Connect models
const Product = require('../models/Product')

router.get('/', (req, res) => {
    res.render('detail', { text: 'hello' })
})

module.exports = router