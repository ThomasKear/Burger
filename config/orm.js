var connection = require('../config/connection.js');

console.log("connection made with orm.js");
// Connect to MySQL database
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {

    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function(err, result) {

            if (err) throw err;
            cb(result);
        });
    },

    create: function(table, col, vals, cb) {
        var queryString = " INSERT INTO " + table;
        queryString = queryString + " (";
        queryString = queryString + col.toString();
        queryString = queryString + ")";
        queryString = queryString + "VALUES (";
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ")";

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString = queryString + " SET ";
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + " WHERE ";
        queryString = queryString + condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
