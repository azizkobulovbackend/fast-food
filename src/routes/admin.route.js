const {Router} = require('express')
const { addCategory, updateCategory, deleteCategory } = require('../controllers/category.controller')
const { addProduct } = require('../controllers/product.controller')
const router = Router()



router.post('/category', addCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', deleteCategory)
router.post('/product', addProduct)

module.exports = router


