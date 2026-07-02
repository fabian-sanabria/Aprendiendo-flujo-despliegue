// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1763 - All code should be reachable
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: sentencias colocadas después de un return o
 *   throw, que jamás llegan a ejecutarse.
 * Por qué es un problema: el código inalcanzable suele indicar un error de
 *   lógica y confunde a quien mantiene la función.
 */

// S1763: statement después de un return.
export function unreachableAfterReturn(value: number): number {
  return value * 2;
  const ignored = value + 1; // S1763: nunca se ejecuta
}

// S1763: statement después de un throw.
export function unreachableAfterThrow(flag: boolean): string {
  if (!flag) {
    throw new Error('flag requerido');
    const neverBuilt = 'no'; // S1763: nunca se ejecuta
  }
  return 'ok';
}

// S1763: return dentro de ambas ramas deja el resto inalcanzable.
export function unreachableTailBlock(n: number): number {
  if (n > 0) {
    return n;
  } else {
    return -n;
  }
  const tail = n * 100; // S1763: bloque final inalcanzable
  return tail;
}
