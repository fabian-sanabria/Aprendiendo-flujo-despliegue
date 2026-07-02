// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1862 - Related "if/else if" conditions should not be
 *   the same / S2589 - Boolean expressions should not be gratuitous
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: comparaciones booleanas gratuitas y ramas
 *   condicionales duplicadas que nunca podrán ejecutarse.
 * Por qué es un problema: revelan lógica sobrante o un bug donde la segunda
 *   condición debía ser distinta.
 */

// S1125 / S2589: comparar un booleano con === true es redundante.
export function redundantBooleanCompare(active: boolean): string {
  if (active === true) {
    return 'activo';
  }
  return 'inactivo';
}

// S1862: dos ramas con exactamente la misma condición.
export function duplicatedElseIf(code: number): string {
  if (code === 1) {
    return 'uno';
  } else if (code === 1) { // S1862: condición idéntica, rama muerta
    return 'otra vez uno';
  }
  return 'otro';
}

// S2589: condición evaluada de nuevo cuando ya se conoce su valor.
export function gratuitousReCheck(count: number): string {
  if (count > 0) {
    if (count > 0) { // S2589: siempre verdadera dentro de este bloque
      return 'positivo';
    }
  }
  return 'no positivo';
}
