// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1763 - "All code should be reachable"
 * Categoría: Bug
 * Qué debe detectar SonarCloud: sentencias ubicadas después de un return,
 *   throw, break o continue que nunca llegan a ejecutarse.
 * Por qué es un problema: el código posterior es muerto; suele delatar un
 *   error de flujo o una intención no cumplida por el desarrollador.
 */

/**
 * Ejemplo 1: código después de un return incondicional.
 */
export function sumaConCodigoMuerto(a: number, b: number): number {
  const total = a + b;
  return total;
  // S1763: esta línea nunca se ejecuta (código inalcanzable)
  // eslint-disable-next-line no-unreachable
  console.log('resultado', total);
}

/**
 * Ejemplo 2: código después de un throw.
 */
export function fallaSiempre(mensaje: string): void {
  throw new Error(mensaje);
  // S1763: instrucción inalcanzable tras el throw
  // eslint-disable-next-line no-unreachable
  const registro = mensaje.toUpperCase();
}
