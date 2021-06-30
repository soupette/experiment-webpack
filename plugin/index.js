const transformImport = require('./transformers/import');

const importVisitors = {
  ImportDeclaration: transformImport,
};

const visitor = {
  Program: {
    enter(programPath, state) {
      programPath.traverse(importVisitors, state);
    },
    exit(programPath, state) {
      programPath.traverse(importVisitors, state);
    },
  },
};

module.exports = ({ template, types: t }) => {
  return {
    name: 'module-resolver',
    visitor,

    pre() {
      this.types = t;

      this.moduleResolverVisited = new Set();
    },

    post() {
      this.moduleResolverVisited.clear();
    },
  };
};
