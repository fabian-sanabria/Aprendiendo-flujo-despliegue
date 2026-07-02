// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2259 - "Null pointers should not be dereferenced"
 *   (aplicada a valores undefined).
 * Categoría: Bug
 * Qué debe detectar SonarCloud: acceso a propiedades de un valor undefined,
 *   ya sea una variable sin inicializar o el resultado de un lookup fallido.
 * Por qué es un problema: acceder a una propiedad de undefined lanza
 *   "TypeError: Cannot read properties of undefined" en ejecución.
 */

interface Config {
  host: string;
  puerto: number;
}

/**
 * Ejemplo 1: variable declarada sin inicializar (undefined) y desreferenciada.
 */
export function leerHost(): string {
  let config: Config;
  // S2259: 'config' es undefined y se accede a '.host'
  return config.host;
}

/**
 * Ejemplo 2: acceso a un índice inexistente de un arreglo y luego a su propiedad.
 */
export function primerPuerto(configs: Config[]): number {
  // Con arreglo vacío 'configs[0]' es undefined
  const primera = configs[10];
  // S2259: 'primera' puede ser undefined y se accede a '.puerto'
  return primera.puerto;
}
