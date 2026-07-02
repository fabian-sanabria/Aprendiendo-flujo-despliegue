// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S6544 / S4123 - "Promises should be awaited"
 * Categoría: Bug
 * Qué debe detectar SonarCloud: una función async cuyo resultado (una Promise)
 *   se invoca sin 'await' ni '.then/.catch', quedando "flotante".
 * Por qué es un problema: los errores de la promesa no se capturan
 *   (unhandled rejection) y el orden de ejecución no queda garantizado.
 */

/**
 * Promesa auxiliar segura: solo resuelve un número, sin I/O.
 */
async function resolverValor(x: number): Promise<number> {
  return x * 2;
}

/**
 * Ejemplo 1: se llama a la función async y NO se espera su promesa.
 */
export function promiseNotAwaited1(): number {
  // S6544: promesa flotante, el resultado se descarta sin await
  resolverValor(5);
  return 0;
}

/**
 * Ejemplo 2: dentro de una función async se invoca otra sin await.
 */
export async function promiseNotAwaited2(): Promise<string> {
  // S6544: promesa flotante dentro de contexto async
  resolverValor(10);
  return 'hecho';
}
