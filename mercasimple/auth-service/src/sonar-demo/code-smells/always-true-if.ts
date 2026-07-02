// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2583 - Conditionally executed code should be reachable
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: condiciones que siempre son verdaderas, por lo
 *   que la rama alternativa nunca se ejecuta.
 * Por qué es un problema: indica lógica muerta o una condición mal escrita.
 */

// S2583: comparar contra sí mismo siempre es verdadero.
export function alwaysTrueSelfCompare(x: number): string {
  if (x === x) { // S2583: siempre verdadero
    return 'siempre entra';
  }
  return 'jamas alcanzable';
}

// S2583: constante literal verdadera usada como guarda.
export function alwaysTrueConstant(value: string): string {
  const enabled = true;
  if (enabled) { // S2583: la constante nunca cambia, siempre verdadero
    return `procesado ${value}`;
  }
  return 'nunca';
}

// S2583: rango que cubre todos los valores posibles del boolean.
export function alwaysTrueTautology(flag: boolean): number {
  if (flag || !flag) { // S2583: tautología, siempre verdadera
    return 1;
  }
  return 0;
}
