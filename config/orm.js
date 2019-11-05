const connection = require("./connection.js");
// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = function() {
  this.selectAll = function(tableInput, callback) {
    var queryString = "SELECT * FROM ??";
    return connection.query(queryString, [tableInput], callback);
  };
  this.insertOne = function(
    table,
    firstColumn,
    secondColumn,
    firstValue,
    secondValue,
    callback
  ) {
    var queryString = "INSERT INTO ??(??, ??) VALUES (?,?);";
    connection.query(
      queryString,
      [table, firstColumn, secondColumn, firstValue, secondValue],
      callback
    );
  };
  this.updateOne = function(
    tableName,
    columnToSet,
    valueToSet,
    columnId,
    valueId,
    callback
  ) {
    var queryString = "UPDATE ?? SET ?=? WHERE ?=?;";

    connection.query(
      queryString,
      [tableName, columnToSet, valueToSet, columnId, valueId],
      callback
    );
  };
};

module.exports = orm;
