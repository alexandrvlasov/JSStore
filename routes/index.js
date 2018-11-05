const express = require('express')
const router = express.Router()

// Connect models
const Product = require('../models/Product')
const Category = require('../models/Category')

router.get('/', async (req, res) => {
  const products = await Product.find()
  const categorys = await Category.find()

  res.render('index', { title: 'Express', message: 'Hello world', category: categorys, product: products })
})

router.get('/product', (req, res) => {
  res.render('detail.hbs', { title: req.params.id })
})

router.get('/about', (req, res) => {
  res.render('about', { title: 'О нас' })
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Контакты' })
})

module.exports = router