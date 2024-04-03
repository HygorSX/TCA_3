var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.render("pages/index",{pagina:"index"});
});
router.get("/login", function (req, res) {
    res.render("pages/login",{pagina:"pages/login"});
});

router.get("/buypage", function (req, res) {
    res.render("pages/buypage",{pagina:"pages/buypage"});
});




module.exports = router;