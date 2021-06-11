const router = require("express").Router();
const directorController = require("../controllers/directorController");

router.route("/getAlldirectors").get(directorController.getAllDirectors);

module.exports = router;