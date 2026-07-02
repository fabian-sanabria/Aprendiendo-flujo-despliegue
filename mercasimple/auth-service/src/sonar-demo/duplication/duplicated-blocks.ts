// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: "Duplicated blocks" (densidad de duplicación de código).
 * Categoría: Duplication
 * Qué debe detectar SonarCloud: un mismo bloque de sentencias repetido tres o
 *   más veces dentro del archivo.
 * Por qué es un problema: aumenta la superficie de mantenimiento; un cambio
 *   debe aplicarse en cada copia, elevando el riesgo de errores.
 */

/**
 * Ejemplo 1: primer bloque duplicado.
 */
export function procesarClienteA(nombre: string, saldo: number): string {
  const nombreNormalizado = nombre.trim().toLowerCase();
  const saldoConImpuesto = saldo * 1.19;
  const saldoConDescuento = saldoConImpuesto - saldoConImpuesto * 0.05;
  const nivel = saldoConDescuento > 1000 ? 'premium' : 'estandar';
  const etiqueta = nombreNormalizado + ':' + nivel;
  const resumen = etiqueta + ':' + saldoConDescuento.toFixed(2);
  return resumen;
}

/**
 * Ejemplo 2: bloque duplicado (mismo cuerpo que el anterior).
 */
export function procesarClienteB(nombre: string, saldo: number): string {
  const nombreNormalizado = nombre.trim().toLowerCase();
  const saldoConImpuesto = saldo * 1.19;
  const saldoConDescuento = saldoConImpuesto - saldoConImpuesto * 0.05;
  const nivel = saldoConDescuento > 1000 ? 'premium' : 'estandar';
  const etiqueta = nombreNormalizado + ':' + nivel;
  const resumen = etiqueta + ':' + saldoConDescuento.toFixed(2);
  return resumen;
}

/**
 * Ejemplo 3: bloque duplicado por tercera vez.
 */
export function procesarClienteC(nombre: string, saldo: number): string {
  const nombreNormalizado = nombre.trim().toLowerCase();
  const saldoConImpuesto = saldo * 1.19;
  const saldoConDescuento = saldoConImpuesto - saldoConImpuesto * 0.05;
  const nivel = saldoConDescuento > 1000 ? 'premium' : 'estandar';
  const etiqueta = nombreNormalizado + ':' + nivel;
  const resumen = etiqueta + ':' + saldoConDescuento.toFixed(2);
  return resumen;
}
