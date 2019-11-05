const path = require("path");
//const Sequelize = require("sequelize");
//const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
//const config = require(__dirname + "./config.json")[env];
//const db = {};

const ORM = require("../config/orm.js");
const burger = function() {
  this.orm = new ORM();
  this.insertBurger = function(name, devoured, callback) {
    return this.orm.insertOne(
      "burgers",
      "burger_name",
      "devoured",
      name,
      devoured,
      callback
    );
  };
  this.updateBurger = function(name, devoured, callback) {
    return this.orm.updateOne(
      "burgers",
      "devoured",
      devoured,
      "burger_name",
      name,
      callback
    );
  };
  this.selectBurgers = function(callback) {
    return this.orm.selectAll("burgers", callback);
  };
};

//This goes at the end
module.exports = new burger();
