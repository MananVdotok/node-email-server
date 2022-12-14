const router = require("express").Router();
const apiCtrl = require("../controller/apiCtrl");

router.route("/emailMessage").post(apiCtrl.emailMsg);
router.route("/hi").get(apiCtrl.hi);

module.exports = router;
