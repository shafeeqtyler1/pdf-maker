const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',    // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'node',  // Replace with your database name,
    port: 3307
});

module.exports = pool.promise();
