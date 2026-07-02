// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2486 - "Generic exceptions should not be ignored" y
 *   S108 - "Nested blocks of code should not be left empty".
 * Categoría: Bug
 * Qué debe detectar SonarCloud: bloques catch vacíos o que silencian la
 *   excepción sin manejarla ni relanzarla conservando el stack.
 * Por qué es un problema: los errores desaparecen sin dejar rastro,
 *   dificultando el diagnóstico y ocultando fallos reales.
 */

/**
 * Ejemplo 1: catch completamente vacío (S108 + S2486).
 */
export function ignoraSilencioso(valor: string): number {
  try {
    return JSON.parse(valor).total;
  } catch (e) {
    // S108/S2486: catch vacío, la excepción se ignora por completo
  }
  return 0;
}

/**
 * Ejemplo 2: catch que solo hace console.log y continúa como si nada.
 */
export function soloLoguea(valor: string): number {
  try {
    return JSON.parse(valor).total;
  } catch (e) {
    // S2486: se registra pero no se maneja ni relanza el error
    console.log('error parseando', e);
  }
  return -1;
}

/**
 * Ejemplo 3: rethrow que pierde el stack original al crear un Error nuevo.
 */
export function relanzaPerdiendoStack(valor: string): number {
  try {
    return JSON.parse(valor).total;
  } catch (e) {
    // S2486: se lanza un error nuevo descartando la causa original
    throw new Error('fallo el parseo');
  }
}
