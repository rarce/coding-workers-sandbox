'use strict';
const assert = require('node:assert');
const { sumaRango } = require('../src/rango');

const casos = [
  ['un solo numero', [3, 3], 3],
  ['rango corto', [1, 4], 10],
  ['rango con cero', [0, 2], 3],
];

let fallos = 0;
for (const [nombre, args, esperado] of casos) {
  try {
    assert.strictEqual(sumaRango(...args), esperado);
    console.log(`ok    ${nombre}`);
  } catch (error) {
    fallos += 1;
    console.log(`FALLA ${nombre}: ${error.message}`);
  }
}
console.log(`\n${casos.length - fallos}/${casos.length} pasan`);
process.exit(fallos === 0 ? 0 : 1);
