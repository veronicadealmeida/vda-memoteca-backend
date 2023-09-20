const db = require('./_database');

async function select() {
  await db.connect();

  var result = await db.query('SELECT * FROM thoughs');

  console.log('thoughs');
  console.log(result.rows);

  await db.end();
}

select();
