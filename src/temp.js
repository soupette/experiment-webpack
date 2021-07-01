import importer from './importer';

window.isEE = false;
const mo = await importer('components/A');

async function main() {
  mo.default();
}

main();
