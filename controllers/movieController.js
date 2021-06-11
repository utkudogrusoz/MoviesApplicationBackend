const Movie = require("../models/Movie");

const getMovies = async (req, res) => {

    try {
        console.log(req.body._id == null);

        if (req.body._id == null) {
            const movies = await Movie
                .find()
                .populate("movieCategories movieDirector movieCasts")
                .select('movieName movieCategories movieCasts movieDirector movieDescription movieImage movieYear slug');
            res.status(200).json({
                status: "success",
                data: movies
            });
        }

        else {
            const movies = await Movie
                .find({ movieCategories: req.body._id })
                .populate("movieCategories movieDirector movieCasts")
                .select('movieName movieCategories movieCasts movieDirector movieDescription movieImage movieYear slug');
            res.status(200).json({
                status: "success",
                data: movies
            });
        }
       
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: error
        });

    }

}

module.exports = { getMovies }