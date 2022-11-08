
const foo = require('./foo');



foo();

// console.log(module.paths);

// console.log(module);

// console.log(require.extensions); // ! deprecated

// console.log(require.cache);

console.log(module, 'module index');

// * macos
// [
//   '/Users/wangbaoqi/personal/node/modules/node_modules',
//   '/Users/wangbaoqi/personal/node/node_modules',
//   '/Users/wangbaoqi/personal/node_modules',
//   '/Users/wangbaoqi/node_modules',
//   '/Users/node_modules',
//   '/node_modules'
// ]

// * windows

// [ 'c:\\nodejs\\node_modules', 'c:\\node_modules' ] 