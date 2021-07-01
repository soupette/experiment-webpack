export default async function (nodePath) {
  try {
    // return await import(`${window.isEE ? '../ee/' : './'}${nodePath}`);
    if (window.isEE) {
      return await import('./ee/' + nodePath);
    }

    return await import('./' + nodePath);
  } catch (err) {
    console.log(err, nodePath);
  }
}


import C from '/User/Cyril/...'
import C from './src/C'