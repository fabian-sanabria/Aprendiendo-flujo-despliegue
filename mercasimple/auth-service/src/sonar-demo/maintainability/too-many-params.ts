// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S107 - Functions should not have too many parameters
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: funciones que declaran más parámetros que el
 *   máximo permitido (por defecto 7).
 * Por qué es un problema: demasiados parámetros hacen la llamada propensa a
 *   errores y sugieren que faltaría agrupar datos en un objeto.
 */

// S107: nueve parámetros posicionales.
export function buildUserProfile(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  phone: string,
  country: string,
  city: string,
  active: boolean,
): string {
  return `${id}:${firstName} ${lastName}:${age}:${email}:${phone}:${country}:${city}:${active}`;
}

// S107: diez parámetros numéricos para un cálculo agregado.
export function aggregateMetrics(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number,
  j: number,
): number {
  return a + b + c + d + e + f + g + h + i + j;
}
