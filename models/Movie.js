const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({

    movieName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    movieImage: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    movieDescription: {
        type: String,
        require: true,

    },
    movieYear: {
        type: String,
        require: true,
    },
    movieCategories: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "categories",
    },
    movieCasts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "casts",
    },
    movieDirector: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "directors",
    },

    slug: {
        type: String,
        unique: true,
        trim: true
    }

});

MovieSchema.pre("validate", function (next) {

    this.slug = slugify(this.movieName, {
        lower: true,
        strict: true,

    });
    next();

});

const Movie = mongoose.model("movies", MovieSchema);

module.exports = Movie;