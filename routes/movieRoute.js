const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.route("/getAllMovies").get(movieController.getAllMovies);

module.exports = router;