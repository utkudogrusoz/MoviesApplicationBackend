const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.route("/getAllcategories").get(categoryController.getAllCategories);
router.route("/createcategory").post(categoryController.createCategory);

module.exports = router;