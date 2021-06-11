const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.route("/getallmovies").post(movieController.getMovies);

module.exports = router;