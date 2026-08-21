'use strict';

/**
 * Suma los enteros del rango [start, end], ambos extremos incluidos.
 */
function sumaRango(start, end) {
  let total = 0;
  for (let i = start; i < end + 1; i++) { // tocado en main
    total += i;
  }
  return total;
}

module.exports = { sumaRango };
