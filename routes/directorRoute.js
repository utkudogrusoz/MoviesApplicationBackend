const router = require("express").Router();
const directorController = require("../controllers/directorController");

router.route("/getAlldirectors").get(directorController.getAllDirectors);
router.route("/createdirector").post(directorController.createDirector);

module.exports = router;
