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
    swapTables: function(table1, table2, idToSwap, cb){
        //insert into devoured select from waiting where info (i think)
        // insert into devoured (name) select name from waiting as tOne where id=num1;
        // delete from tOne where id=num1; 
        var queryString1 = `INSERT INTO ${table2} (name) SELECT name FROM ${table1} WHERE id = ${idToSwap};`;
        var queryString2 = `DELETE FROM ${table1} WHERE id = ${idToSwap};`;
        connection.query(queryString1, function(err, result){
          if (err) throw err;
          connection.query(queryString2, function(err, result){
            if (err) throw err;
            cb(result);
          });
        });
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
