const db = require('./_database');

async function createTable() {
  await db.connect();
  await db.query(`CREATE TABLE thoughs (
    id serial PRIMARY KEY,
    content VARCHAR(200) NOT NULL,
    authorship VARCHAR(50) NOT NULL,
    model VARCHAR(7) NOT NULL

  )`);

  await db.end();

  console.log('Tabela criada');
}

createTable();
