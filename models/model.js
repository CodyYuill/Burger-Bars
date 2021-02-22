//MAKE ORM FUNCTION CALLS
var orm = require("../config/orm.js");

var model = {
    all: function(table, cb){
        orm.all(table, function(res){
            cb(res);
        })
    },
    create: function(name, cb){
        orm.create(name, function(res){
            cb(res);
        })
    }

};


module.exports = model;
