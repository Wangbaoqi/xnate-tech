const path = require('path')

const pagePath = path.join(
  process.cwd(),
  '.content',
  'pages',
  '[lang]',
  's',
  '[snippet].json'
);


console.log(pagePath);