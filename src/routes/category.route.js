const {Router} = require('express')
const { getCategories, addCategory } = require('../controllers/category.controller')
const router = Router()

const route = '/category'

router.get(`${route}/`, getCategories)


module.exports = router