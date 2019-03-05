var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (hbsObject) {
    //   var hbsObject = {
    //     burgers: data
    //   };
    console.log(hbsObject);
    res.render("index", { hbsObject });
  });
});

router.put("/burgers/update", function (req, res) {
  burger.update(req.body.burger_id, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.post("/burgers/create", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    res.redirect("/");
  })
})


// Export routes for server.js to use.
module.exports = router;

