const Category = require("../models/Category");

const getAllCategories = async (req, res) => {
  try {
    const Categories = await Category.find();

    res.status(200).json({
      status: "success",
      data: Categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};
