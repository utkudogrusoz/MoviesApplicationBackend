const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const CastSchema = new Schema({

    castName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    castPhoto: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    castDescription: {
        type: String,
        require: true,


    },
    castAge: {
        type: String,
        require: true,


    },

    slug: {
        type: String,
        unique: true,
        trim: true
    }

});

CastSchema.pre("validate", function (next) {

    this.slug = slugify(this.castName, {
        lower: true,
        strict: true,

    });
    next();

});

const Cast = mongoose.model("casts", CastSchema);

module.exports = Cast;