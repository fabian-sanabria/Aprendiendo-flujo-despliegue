// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S4790 - Using weak hashing algorithms is security-sensitive
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso del algoritmo de hash criptográfico
 *   débil MD5 mediante `crypto.createHash('md5')`.
 * Por qué es un problema: MD5 está roto frente a colisiones y es demasiado
 *   rápido, por lo que no ofrece resistencia adecuada para contraseñas,
 *   verificación de integridad ni generación de tokens de seguridad.
 */
import { createHash } from 'crypto';

/**
 * Variante 1: hash MD5 aplicado a una contraseña (uso más peligroso).
 */
export function hashPasswordMd5(password: string): string {
  // Hotspot S4790: MD5 no debe usarse para almacenar contraseñas.
  return createHash('md5').update(password).digest('hex');
}

/**
 * Variante 2: hash MD5 usado como checksum de integridad de un fichero.
 */
export function fileIntegrityMd5(content: Buffer): string {
  // Hotspot S4790: MD5 es vulnerable a colisiones, integridad no fiable.
  return createHash('md5').update(content).digest('hex');
}

/**
 * Variante 3: hash MD5 usado para derivar un token de sesión.
 */
export function sessionTokenMd5(seed: string): string {
  // Hotspot S4790: token derivado de MD5, predecible y débil.
  const hash = createHash('md5');
  hash.update(seed);
  return hash.digest('hex');
}
