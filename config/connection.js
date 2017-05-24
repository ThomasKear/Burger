var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: process.env.PORT || 3000,
    user: "root",
    password: "caeser",
    database: "Burger_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    // console.log("Connected as id: "+ connection.threadId);
    if (err) throw err;

});

module.exports = connection;