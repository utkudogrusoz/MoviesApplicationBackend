const Category = require("../models/Category");

const getAllCategories = async (req, res) => {

    try {
        const Categories = await Category
            .find()
            
            

        res.status(200).json({
            status: "success",
            data: Categories
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error
        });

    }

}

module.exports = { getAllCategories }