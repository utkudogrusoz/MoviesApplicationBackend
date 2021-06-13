const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    if (req.body._id == null) {
      const movies = await Movie.find()
        .populate("movieCategories movieDirector movieCasts")
        .select(
          "movieName movieCategories movieCasts movieDirector movieDescription movieImage movieYear slug"
        );
      res.status(200).json({
        status: "success",
        data: movies,
      });
    } else {
      const movies = await Movie.find({ movieCategories: req.body._id })
        .populate("movieCategories movieDirector movieCasts")
        .select(
          "movieName movieCategories movieCasts movieDirector movieDescription movieImage movieYear slug"
        );
      res.status(200).json({
        status: "success",
        data: movies,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(res.body);
    res.status(201).json({
      status: "success",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

module.exports = {
  getMovies,
  createMovie,
};
