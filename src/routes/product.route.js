const {Router} = require('express')
const { getProducts } = require('../controllers/product.controller')
const router = Router()

const route = '/products'

router.get(`${route}/`, getProducts)
module.exports = router