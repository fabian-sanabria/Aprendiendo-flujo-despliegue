// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S905 - Non-empty statements should change control flow
 *   or have at least one side-effect
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: expresiones cuyo resultado se descarta y que no
 *   producen ningún efecto observable.
 * Por qué es un problema: normalmente esconde un bug (una asignación o llamada
 *   que se olvidó) y confunde al lector.
 */

// S905: comparación cuyo resultado no se usa ni asigna.
export function uselessComparison(a: number, b: number): number {
  a === b; // S905: expresión sin efecto, el resultado se descarta
  return a + b;
}

// S905: acceso a propiedad / expresión aritmética descartada.
export function uselessArithmetic(value: number): number {
  value + 1; // S905: cálculo cuyo resultado no se guarda
  return value;
}

// S905: referencia a variable como statement, sin efecto.
export function uselessIdentifier(label: string): string {
  const upper = label.toUpperCase();
  upper; // S905: statement que solo menciona la variable
  return upper;
}
