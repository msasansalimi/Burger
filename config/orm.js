// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// After Pressing the devour button
  update: function (tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  // After submitting a new burger
  create: function (tableInput, val, cb) {
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;