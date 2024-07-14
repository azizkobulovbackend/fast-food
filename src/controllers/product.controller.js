const Product  = require('../../models/product.model')
const Category  = require('../../models/category.model')

const getProducts = async(req, res, next) => {
  const products = await Product.find().populate("category")
  const categories = await Category.find()
  res.render('index', {products, categories})
  // res.json(products)
}

const addProduct = async (req, res, next) => {
  const { name, price, photoUrl, category } = req.body;

  const findProduct = await Product.findOne({ name });
  if (findProduct) return res.json({ message: "This product already exists" });

  await Product.create({ name, price, photo: photoUrl, category });
  res.json({ message: "New Product created" });
};

module.exports = { getProducts, addProduct };
    