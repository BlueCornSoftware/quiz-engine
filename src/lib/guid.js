'use strict';

const table = {};

const s4 = () => Math
  .floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const uuid = () => s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();

module.exports = () => {
  let u = uuid();
  while(table[u]) {
    u = uuid();
  }
  table[u] = true;
  return u;
};
