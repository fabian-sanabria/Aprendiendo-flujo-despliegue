// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1301 - "switch" statements should have at least 3 cases
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: switches con uno o dos casos que serían más
 *   claros escritos como un if/else.
 * Por qué es un problema: un switch tan pequeño añade complejidad sintáctica
 *   innecesaria frente a un simple condicional.
 */

// S1301: switch con un único caso más default.
export function switchSingleCase(kind: string): string {
  switch (kind) { // S1301: debería ser un if
    case 'a':
      return 'letra a';
    default:
      return 'otro';
  }
}

// S1301: switch con dos casos, mejor un if/else.
export function switchTwoCases(code: number): string {
  switch (code) { // S1301: dos casos, preferible if/else
    case 1:
      return 'uno';
    case 2:
      return 'dos';
    default:
      return 'desconocido';
  }
}

// S1301: switch booleano-like con un solo caso útil.
export function switchOnFlag(flag: string): number {
  switch (flag) { // S1301: un caso, reemplazable por if
    case 'on':
      return 1;
    default:
      return 0;
  }
}
