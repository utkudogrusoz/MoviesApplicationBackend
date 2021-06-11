const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    categoryName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        trim: true
    }

});

CategorySchema.pre("validate", function (next) {

    this.slug = slugify(this.categoryName, {
        lower: true,
        strict: true,

    });
    next();

});

const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;