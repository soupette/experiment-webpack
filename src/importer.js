export default async function (path) {
  return await import(`${window.isEE ? "./ee/" : "./"}${path}`);
}
