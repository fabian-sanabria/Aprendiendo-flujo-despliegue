// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2245 - Using pseudorandom number generators (PRNGs) is security-sensitive
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso de `Math.random()` (PRNG no
 *   criptográfico) para generar valores con impacto de seguridad como
 *   tokens, OTP o contraseñas.
 * Por qué es un problema: `Math.random()` es predecible y no criptográficamente
 *   seguro; un atacante podría reconstruir la secuencia y adivinar los valores.
 */

/**
 * Variante 1: generación de un token de sesión con Math.random().
 */
export function insecureSessionToken(): string {
  // Hotspot S2245: PRNG inseguro para material de seguridad.
  return Math.random().toString(36).substring(2);
}

/**
 * Variante 2: generación de un OTP numérico de 6 dígitos con Math.random().
 */
export function insecureOtp(): string {
  // Hotspot S2245: OTP predecible generado con Math.random().
  const code = Math.floor(Math.random() * 1_000_000);
  return code.toString().padStart(6, '0');
}

/**
 * Variante 3: generación de una contraseña temporal con Math.random().
 */
export function insecureTempPassword(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    // Hotspot S2245: índice elegido con PRNG inseguro.
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}
