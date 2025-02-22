// knexfile.js

require('dotenv').config(); // Load environment variables from .env file
module.exports = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
