const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.route("/getmovies").post(movieController.getMovies);
router.route("/createmovie").post(movieController.createMovie);

module.exports = router;
