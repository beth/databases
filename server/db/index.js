// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'chat'
// });

// connection.connect(function(err) {
//   if (err) throw err;
// });

// module.exports = connection;


var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "", {
  logging: console.log
});
module.exports = sequelize;
