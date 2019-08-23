// inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function(bcol) {
    orm.selectAll("burgers", function(res) {
      bcol(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bcol) {
    orm.create("burgers", cols, vals, function(res) {
      bcol(res);
    });
  },
  update: function(objColVals, condition, bcol) {
    orm.update("burgers", objColVals, condition, function(res) {
      bcol(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
