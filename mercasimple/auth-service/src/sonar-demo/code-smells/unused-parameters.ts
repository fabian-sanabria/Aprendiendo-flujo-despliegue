// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1172 - Unused function parameters should be removed
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: parámetros de función que nunca se utilizan.
 * Por qué es un problema: parámetros muertos engañan sobre el contrato de la
 *   función y suelen esconder un error donde el argumento debía usarse.
 */

// S1172: el parámetro 'context' nunca se usa dentro de la función.
export function greetWithUnusedContext(name: string, context: string): string {
  return `Hola ${name}`;
}

// S1172: varios parámetros declarados pero solo uno se usa.
export function computeUnusedParams(base: number, factor: number, offset: number): number {
  return base + offset;
}

// S1172: parámetro opcional totalmente ignorado en el cuerpo.
export function buildLabelUnusedFlag(value: string, verbose?: boolean): string {
  return `[${value}]`;
}
