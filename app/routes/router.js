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

router.get("/shape", function (req, res) {
    res.render("pages/shape",{pagina:"pages/shape"});
});

router.get("/skate", function (req, res) {
    res.render("pages/skate",{pagina:"pages/skate"});
});

router.get("/roupas", function (req, res) {
    res.render("pages/roupas",{pagina:"pages/roupas"});
});

router.get("/acessorios", function (req, res) {
    res.render("pages/acessorios",{pagina:"pages/acessorios"});
});

router.get("/tenis", function (req, res) {
    res.render("pages/tenis",{pagina:"pages/tenis"});
});

router.get("/buypagev2", function (req, res) {
    res.render("pages/buypagev2",{pagina:"pages/buypagev2"});
});


module.exports = router;