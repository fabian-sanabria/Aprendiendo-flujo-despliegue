// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1481 - Unused local variables should be removed
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: variables locales declaradas y nunca leídas.
 * Por qué es un problema: el código muerto confunde al lector, sugiere errores
 *   lógicos (olvidos) y aumenta el costo de mantenimiento sin aportar valor.
 */

// S1481: variable local simple declarada y nunca usada.
export function localSimpleUnused(input: number): number {
  const unusedLocal = 42; // S1481: nunca se lee
  const result = input * 2;
  return result;
}

// S1481: destructuring que crea una variable nunca usada.
export function destructuringUnused(payload: { a: number; b: number }): number {
  const { a, b } = payload; // S1481: 'b' nunca se usa
  return a + 1;
}

// S1481: valor asignado a una variable que luego nunca se lee.
export function assignedNeverRead(values: number[]): number {
  let total = 0;
  let scratch = 0; // S1481: se asigna pero nunca se lee
  for (let i = 0; i < values.length; i++) {
    total += values[i];
    scratch = values[i];
  }
  return total;
}
