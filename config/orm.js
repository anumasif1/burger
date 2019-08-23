// Import MySQL connection.
var connection = require("../config/connection");

// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
// selectAll()
selectAll:  function(tableInput, bcol) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
    bcol(result);
    });
  },
// insertOne()
create: function(table, cols, vals, bcol) {
  var queryString = "INSERT INTO " + table;

  queryString += " (";
  queryString += cols.toString();
  queryString += ") ";
  queryString += "VALUES (";
  queryString += printQuestionMarks(vals.length);
  queryString += ") ";

  console.log(queryString);

  connection.query(queryString, vals, function(err, result) {
    if (err) {
      throw err;
    }

    bcol(result);
  });
},

// updateOne()
update: function(table, objColVals, condition, bcol) {
  var queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += objToSql(objColVals);
  queryString += " WHERE ";
  queryString += condition;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    bcol(result);
  });
}
};


}
// Export the ORM object in module.exports.
module.exports = orm;
