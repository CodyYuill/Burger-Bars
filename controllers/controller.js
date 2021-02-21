var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var model = require("../models/model.js");

router.get("/", function(req, res){
    res.render("index");
});

module.exports = router;
