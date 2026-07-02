// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1764 - "Identical expressions should not be used on
 *   both sides of a binary operator" y comparaciones sospechosas (== vs ===).
 * Categoría: Bug
 * Qué debe detectar SonarCloud: operandos idénticos a ambos lados de un
 *   operador de comparación (siempre true/false) y comparaciones que por su
 *   forma siempre dan el mismo resultado.
 * Por qué es un problema: casi siempre indica un error de tipeo o lógica
 *   equivocada; la condición no evalúa lo que el autor cree.
 */

/**
 * Ejemplo 1: operandos idénticos a ambos lados (siempre true).
 */
export function comparaIguales(valor: number): boolean {
  // S1764: 'valor === valor' siempre es true
  return valor === valor;
}

/**
 * Ejemplo 2: comparación con operandos idénticos usando '>' (siempre false).
 */
export function comparaMayor(cantidad: number): boolean {
  // S1764: 'cantidad > cantidad' siempre es false
  return cantidad > cantidad;
}

/**
 * Ejemplo 3: uso de '==' laxo donde debería ir '===' (comparación de tipo dudosa).
 */
export function comparaLaxa(codigo: string): boolean {
  // S1764/comparación laxa: '==' entre string y number con coerción implícita
  return codigo == codigo && (codigo as any) == 0;
}
