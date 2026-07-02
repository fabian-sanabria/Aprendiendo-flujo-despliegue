// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2583 - "Conditionally executed code should be
 *   reachable" (condición siempre falsa / gate sin efecto).
 * Categoría: Bug
 * Qué debe detectar SonarCloud: condiciones cuyo resultado es constante por
 *   los tipos o valores involucrados, de modo que la rama nunca se ejecuta.
 * Por qué es un problema: código muerto que refleja lógica equivocada; la
 *   funcionalidad esperada dentro del if nunca corre.
 */

/**
 * Ejemplo 1: un booleano fijado en true y luego comprobado por false.
 */
export function ramaImposible(): string {
  const habilitado = true;
  // S2583: 'habilitado' es siempre true, la rama else nunca se alcanza
  if (!habilitado) {
    return 'nunca';
  }
  return 'siempre';
}

/**
 * Ejemplo 2: comparación de una constante numérica que nunca se cumple.
 */
export function descuentoInvalido(precio: number): number {
  // Tipado explícito como number para que el defecto lo detecte Sonar por
  // dataflow (no el compilador de TS, que si no estrecharía al literal 1).
  const factor: number = 1;
  // S2583: 'factor' vale 1, la condición '=== 0' nunca es verdadera
  if (factor === 0) {
    return precio * 0.5;
  }
  return precio;
}
