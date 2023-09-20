const db = require('./_database');

async function dropTable() {
  await db.connect();
  await db.query('DROP TABLE thoughs CASCADE');
  await db.end();

  console.log('Tabela removida');
}

dropTable();
