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
    create: function(name, cb){
        var queryString = "INSERT INTO waiting (name) VALUES (?);"
        connection.query(queryString, [name], function(err, result){
          if (err) throw err;
          cb(result);
        });
    }
};


module.exports = orm;
