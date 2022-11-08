const utils = {};

[
  'info'
].forEach(async u => {
  const infos = await import(`./${u}.mjs`)
  console.log(infos);
  Object.assign(utils, infos)
  console.log(utils, 'utils');

});

console.log(utils, 'utils out');

export {
  utils
}
