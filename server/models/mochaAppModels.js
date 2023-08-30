const { Pool } = require('pg');

const PG_URI = 
    'postgres://wblnztvn:X-rt0YxkeapznpXV9v9_UhbUhMOtd8C0@hansken.db.elephantsql.com/wblnztvn';

// create a new pool using the connection string above
const pool = new Pool({
    connectionString: PG_URI,
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        const result = pool.query(text, params).then(callback);
        return result;
    },
};