const router = require("express").Router();
const castController = require("../controllers/castController");

router.route("/getAllCasts").get(castController.getAllCasts);

module.exports = router;