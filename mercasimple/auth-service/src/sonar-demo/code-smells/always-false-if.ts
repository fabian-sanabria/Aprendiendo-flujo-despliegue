// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2583 - Conditionally executed code should be reachable
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: condiciones que siempre son falsas, dejando su
 *   bloque interno como código muerto que jamás se ejecuta.
 * Por qué es un problema: revela lógica inalcanzable o un error en la condición.
 */

// S2583: constante literal falsa usada como guarda.
export function alwaysFalseConstant(value: string): string {
  const enabled = false;
  if (enabled) { // S2583: siempre falso, bloque inalcanzable
    return `procesado ${value}`;
  }
  return 'nunca procesado';
}

// S2583: contradicción lógica que nunca puede cumplirse.
export function alwaysFalseContradiction(flag: boolean): number {
  if (flag && !flag) { // S2583: contradicción, siempre falsa
    return 1;
  }
  return 0;
}

// S2583: comparación de desigualdad consigo mismo, siempre falsa.
export function alwaysFalseSelfCompare(x: number): string {
  if (x !== x) { // S2583: nunca verdadero para un número normal
    return 'jamas';
  }
  return 'siempre aqui';
}
