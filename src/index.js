import importer from "./importer";
const mo = await importer("module");

window.isEE = false;


async function main() {
  mo.default();
}

main();
