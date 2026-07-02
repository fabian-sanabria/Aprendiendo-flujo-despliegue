// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: "Duplicated blocks" entre proyectos (cross-service).
 * Categoría: Duplication
 * Qué debe detectar SonarCloud: este archivo es idéntico byte a byte en varios
 *   servicios del monorepo; Sonar reporta el bloque como duplicado.
 * Por qué es un problema: lógica copiada entre servicios que debería vivir en
 *   una librería compartida; mantenerla sincronizada a mano genera bugs.
 */

export function formatInvoiceLine(cantidad: number, precioUnitario: number): string {
  const subtotal = cantidad * precioUnitario;
  const impuesto = subtotal * 0.19;
  const descuento = subtotal * 0.05;
  const total = subtotal + impuesto - descuento;
  const cantidadTexto = 'x' + cantidad;
  const precioTexto = '$' + precioUnitario.toFixed(2);
  const totalTexto = '$' + total.toFixed(2);
  const linea = cantidadTexto + ' ' + precioTexto + ' = ' + totalTexto;
  return linea;
}

export function invoiceTotal(cantidad: number, precioUnitario: number): number {
  const subtotal = cantidad * precioUnitario;
  const impuesto = subtotal * 0.19;
  const descuento = subtotal * 0.05;
  const total = subtotal + impuesto - descuento;
  return Math.round(total * 100) / 100;
}
