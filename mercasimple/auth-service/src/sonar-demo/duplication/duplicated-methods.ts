// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S4144 - "Functions should not have identical
 *   implementations".
 * Categoría: Duplication
 * Qué debe detectar SonarCloud: varias funciones con nombres distintos pero
 *   cuerpo exactamente igual.
 * Por qué es un problema: suele indicar copy/paste; los cambios deben
 *   replicarse a mano en cada copia, con riesgo de inconsistencias y bugs.
 */

/**
 * Ejemplo 1.
 */
export function calcularTotalCarrito(precios: number[]): number {
  let total = 0;
  for (const p of precios) {
    total = total + p * 1.19;
  }
  return Math.round(total * 100) / 100;
}

/**
 * Ejemplo 2: implementación idéntica a la anterior (S4144).
 */
export function calcularTotalPedido(precios: number[]): number {
  let total = 0;
  for (const p of precios) {
    total = total + p * 1.19;
  }
  return Math.round(total * 100) / 100;
}

/**
 * Ejemplo 3: misma implementación de nuevo (S4144).
 */
export function calcularTotalFactura(precios: number[]): number {
  let total = 0;
  for (const p of precios) {
    total = total + p * 1.19;
  }
  return Math.round(total * 100) / 100;
}
