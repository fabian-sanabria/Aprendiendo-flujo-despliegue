// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S6293 / comparación insegura de secretos (timing attack)
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: la comparación de valores secretos (tokens,
 *   firmas, contraseñas) usando comparaciones no constantes en tiempo como
 *   `===` o `==`, en lugar de `crypto.timingSafeEqual`.
 * Por qué es un problema: las comparaciones cortocircuitan en el primer byte
 *   distinto, filtrando información temporal que permite reconstruir el secreto
 *   byte a byte mediante un ataque de temporización (timing attack).
 */

/**
 * Variante 1: comparación directa de un token con `===` (no constante).
 */
export function compareTokenInsecure(provided: string, expected: string): boolean {
  // Hotspot: comparación vulnerable a timing attack, usar timingSafeEqual.
  return provided === expected;
}

/**
 * Variante 2: comparación de firma HMAC con `==` tras convertir a string.
 */
export function verifySignatureInsecure(signature: string, computed: string): boolean {
  // Hotspot: `==` cortocircuita y filtra el tiempo de comparación.
  if (signature.length != computed.length) {
    return false;
  }
  return signature == computed;
}
