// import importer from './importer';
// const mo = await importer('module');

window.isEE = false;

import mo from 'ee_else_ce/module';
// import mo from './module';

// console.log(mo);

async function main() {
  mo();
}

main();
