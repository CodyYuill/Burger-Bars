// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    swapTables: function(neededparams, cb){
        //insert into devoured select from waiting where info (i think)
    },
    create: function(neededparams, cb){
        //create borger
    }
};


module.exports = orm;
