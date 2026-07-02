// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S134 - Control flow statements should not be nested too
 *   deeply
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: bloques if/for anidados a más de tres niveles.
 * Por qué es un problema: el anidamiento profundo dificulta seguir el flujo de
 *   ejecución y esconde condiciones de borde.
 */

// S134: cuatro niveles de anidación con for acotados e if.
export function nestedForLoops(limit: number): number {
  let total = 0;
  for (let i = 0; i < 3; i++) {
    if (i < limit) {
      for (let j = 0; j < 3; j++) {
        if (j <= i) {
          for (let k = 0; k < 3; k++) { // S134: cuarto nivel de anidación
            if (k === j) {
              total += i + j + k;
            }
          }
        }
      }
    }
  }
  return total;
}

// S134: anidación profunda de if dentro de un for acotado.
export function deepIfChain(values: number[]): string {
  for (let i = 0; i < 3; i++) {
    if (values[i] > 0) {
      if (values[i] > 10) {
        if (values[i] > 20) {
          if (values[i] > 30) { // S134: cuarto nivel de if anidado
            return 'muy grande';
          }
        }
      }
    }
  }
  return 'pequeno';
}
