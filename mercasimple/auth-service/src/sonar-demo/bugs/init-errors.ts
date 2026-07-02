// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1854 / S3403 - "Variables should not be used before
 *   being assigned a meaningful value" (uso antes de inicialización efectiva).
 * Categoría: Bug
 * Qué debe detectar SonarCloud: una variable que se lee antes de recibir un
 *   valor útil, o un valor calculado que se sobrescribe sin usarse.
 * Por qué es un problema: se opera sobre undefined o sobre datos que no
 *   corresponden, produciendo resultados incorrectos silenciosos.
 */

/**
 * Ejemplo 1: la variable se usa en el cálculo antes de asignarle su valor real.
 */
export function acumularAntesDeInicializar(items: number[]): number {
  let acumulador: number;
  // S1854: 'acumulador' es undefined en la primera iteración; undefined + n = NaN
  for (const n of items) {
    acumulador = acumulador + n;
  }
  return acumulador;
}

/**
 * Ejemplo 2: se asigna un valor y de inmediato se reasigna, perdiendo el primero.
 */
export function precioFinal(base: number): number {
  let precio = base * 1.19; // asignación inicial "útil"...
  // S1854: se sobreescribe 'precio' antes de usar el valor anterior
  precio = base;
  return precio;
}
