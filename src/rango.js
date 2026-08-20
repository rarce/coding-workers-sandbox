'use strict';

/**
 * Suma los enteros del rango [start, end], ambos extremos incluidos.
 */
function sumaRango(start, end) {
  let total = 0;
  for (let i = start; i < end; i++) {
    total += i;
  }
  return total;
}

module.exports = { sumaRango };
