// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
const handelbars = require("express-handlebars");
const db = require("../models/burger.js");

// Routes =============================================================
module.exports = function(app) {
  app.engine("handlebars", handelbars({ defaultLayout: "main" }));
  app.get("/", (req, res) => res.send("INDEX"));

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.selectBurgers(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // POST route for saving a new Burger
  app.post("/api/burgers", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.insertBurger(req.body.burger_name, false).then(function(dbBurger) {
      // We have access to the new Burger as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

  // PUT route for updating burgers. We can get the updated Burger data from req.body
  app.put("/api/burgers", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the burgers we want to update
    db.updateBurger(req.body.burger_name, req.body.devoured).then(function(
      dbBurger
    ) {
      res.json(dbBurger);
    });
  });
};
