const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {

    try {
        const movies = await Movie
            .find()
            .populate("movieCategories movieDirector movieCasts")
            .select('movieName movieCategories movieCasts movieDirector movieDescription movieImage movieYear slug');

        res.status(200).json({
            status: "success",
            data: movies
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error
        });

    }

}

module.exports = { getAllMovies }