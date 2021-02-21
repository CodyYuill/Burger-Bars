var express = require("express");

var router = express.Router();

// MAKE CALLS USING MODEL FUNCTIONS
var model = require("../models/model.js");

router.get("/", function(req, res){
    var waitingList;
    var devouredList;
    model.all("waiting", function(data){
        waitingList = data;
        console.log(waitingList);
        model.all("devoured", function(data){
            devouredList = data;
            console.log(devouredList);
            res.render("index", {waitingList, devouredList});
        });
    });
});

module.exports = router;
