const router = require("express").Router();
const castController = require("../controllers/castController");

router.route("/getallcasts").get(castController.getAllCasts);
router.route("/createcast").post(castController.createCast);

module.exports = router;
