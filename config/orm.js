var connection = require('../config/connection.js');

// Connect to MySQL database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

var orm = {

    selectAll: function(callback) {

        connection.query('SELECT * FROM burgers', function(err, result) {

            if (err) throw err;
            callback(result);

        });

    },

    insertOne: function(burger_name, callback) {

        connection.query('INSERT INTO burgers set ?', {
            burger_name: burger_name,
            devoured: 0,
            date: timestamp
        }, function(er, result) {
            if (err) throw err;
            callback(result);
        });

    },

    updateOne: function(burgerID, callback) {

        conection.query('UPDATE burgers SET ? WHERE ?', [{devoured: 1}, {id: burgerID}], function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;
