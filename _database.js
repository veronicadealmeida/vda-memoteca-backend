const pg = require('pg');

const client = new pg.Client({
  database_url:
    'postgresql://postgres:nXg8ucjqkwjMuPObbOtW@containers-us-west-40.railway.app:7449/railway',
  user: 'postgres',
  host: 'containers-us-west-40.railway.app',
  database: 'railway',
  password: 'nXg8ucjqkwjMuPObbOtW',
  port: '7449',
});
module.exports = client;
