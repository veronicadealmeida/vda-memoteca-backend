const db = require('./_database');

async function insert() {
  await db.connect();

  const insertThough = `INSERT INTO thoughs 
                              (content,authorship,model) VALUES 
                              ($1, $2, $3)`;

  await db.query(insertThough, ['I Love Coca-Cola', 'Vê', 'modelo1']);
  await db.query(insertThough, [
    'Passo intormações para o componente filho!!!',
    'Componente pai!',
    'modelo3',
  ]);

  await db.query(insertThough, [
    'Minha propriedade é decorada com @Input',
    'Componente filho',
    'modelo3',
  ]);
  await db.query(insertThough, [
    'Se hoje é o dia das crianças... mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás',
    'ngClass - Dilma',
    'modelo2',
  ]);
  await db.query(insertThough, [
    'Minha propriedade é decorada com @Input',
    'Componente filho',
    'modelo3',
  ]);

  await db.query(insertThough, ['depende!', 'eu tbm', 'modelo3']);

  await db.end();
  console.log('Tabela populada');
}

insert();
