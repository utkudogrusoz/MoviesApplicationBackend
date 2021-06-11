const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.route("/getAllcategories").get(categoryController.getAllCategories);

module.exports = router;