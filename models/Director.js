const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const DirectorSchema = new Schema({

    directorName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    directorPhoto: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    directorDescription: {
        type: String,
        require: true,


    },
    directorAge: {
        type: String,
        require: true,


    },

    slug: {
        type: String,
        unique: true,
        trim: true
    }

});

DirectorSchema.pre("validate", function (next) {

    this.slug = slugify(this.directorName, {
        lower: true,
        strict: true,

    });
    next();

});

const Director = mongoose.model("directors", DirectorSchema);

module.exports = Director;