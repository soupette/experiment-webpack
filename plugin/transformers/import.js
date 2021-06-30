const path = require('path');
const template = require('@babel/template').default;

module.exports = function transformImport(nodePath, state) {
  if (state.moduleResolverVisited.has(nodePath)) {
    return;
  }
  state.moduleResolverVisited.add(nodePath);

  const source = nodePath.get('source').node.value;

  if (source.includes('ee_else_ce')) {
    const specifiers = nodePath.node.specifiers.map((s) => ` ${s.local.name}`);
    const f = source.replace('ee_else_ce/', '');

    const pathArray = f.split('/').map((s) => s.trim());
    const eePath = path.join('./ee', ...pathArray);
    const cePath = path.join('./', ...pathArray);

    const tmpNode = `const ${specifiers[0]} = (() => {
        if (window.isEE) {
          return require('./${eePath}').default;
        }
  
        return require('./${cePath}').default;
      })();`;

    nodePath.replaceWith(template.statement.ast(tmpNode));
  }
};
