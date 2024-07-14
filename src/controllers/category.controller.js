const Category = require("../../models/category.model");

const getCategories = async (req, res, next) => {
  const categories = await Category.find()
  res.json(categories)
//   res.render('index', {categories})

};

const getCategoryById = async (req, res, next) => {
    const {id} = req.params
    const products = await Products.findMany({_id: id});
    res.json({ message: "Success", data: categories });
  };

const addCategory = async (req, res, next) => {
  try {
    const { name, photoUrl } = req.body;

  const findCategory = await Category.findOne({ name });
  if (findCategory) return res.json({ message: "This category already exists" });

  await Category.create({ name, photo: photoUrl });
  res.json({ message: "New Category created" });
  } catch(error) {
    console.log(error)
  }
};

const updateCategory = async (req, res) => {
    const {id} = req.params
    const {name, photoUrl} = req.body
    const findCategory = await Category.findOne({id})
    if (findCategory) return res.json({ message: "This category already exists" });
    await Category.findOneAndUpdate({_id: id}, {$set: {name, photo: photoUrl}})
    res.json({ message: "Category updated" });
}

const deleteCategory = async (req, res) => {
    const {id} = req.params
    const {name, photoUrl} = req.body
    const findCategory = await Category.findOne({id})
    if (findCategory) return res.json({ message: "This category already exists" });
    await Category.deleteOne({_id: id})
    res.json({message: "Category deleted"}) 
}


module.exports = { getCategories, addCategory, updateCategory, deleteCategory };
