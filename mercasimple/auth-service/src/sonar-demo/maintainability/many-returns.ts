// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1142 - Functions should not contain too many return
 *   statements
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: funciones con más returns que el máximo
 *   recomendado (por defecto 3).
 * Por qué es un problema: múltiples puntos de salida dificultan seguir el flujo
 *   y razonar sobre las post-condiciones de la función.
 */

// S1142: seis returns distintos según el rango del valor.
export function gradeScore(score: number): string {
  if (score >= 90) {
    return 'A';
  }
  if (score >= 80) {
    return 'B';
  }
  if (score >= 70) {
    return 'C';
  }
  if (score >= 60) {
    return 'D';
  }
  if (score >= 0) {
    return 'F';
  }
  return 'invalido';
}

// S1142: cinco returns según la categoría textual.
export function routeByType(kind: string): number {
  if (kind === 'alpha') {
    return 1;
  }
  if (kind === 'beta') {
    return 2;
  }
  if (kind === 'gamma') {
    return 3;
  }
  if (kind === 'delta') {
    return 4;
  }
  return 0;
}
