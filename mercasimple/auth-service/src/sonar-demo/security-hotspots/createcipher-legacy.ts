// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S5542 - Encryption algorithms should be used with secure mode and padding scheme
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso de la API obsoleta e insegura
 *   `crypto.createCipher(...)`, que deriva la clave de forma débil (MD5 sin
 *   salt) y no permite fijar un IV, junto con algoritmos/modos inseguros.
 * Por qué es un problema: `createCipher` está deprecado; su derivación de clave
 *   es predecible y el modo por defecto es inseguro, exponiendo el texto cifrado.
 */
import { createCipher, Cipher } from 'crypto';

/**
 * Variante 1: cifrado con createCipher y algoritmo AES en modo por defecto.
 */
export function legacyEncryptAes(plaintext: string, secret: string): string {
  // Hotspot S5542: createCipher está deprecado y deriva la clave con MD5.
  const cipher: Cipher = createCipher('aes-256-cbc', secret);
  return cipher.update(plaintext, 'utf8', 'hex') + cipher.final('hex');
}

/**
 * Variante 2: cifrado con createCipher usando un algoritmo débil (DES).
 */
export function legacyEncryptDes(plaintext: string, secret: string): string {
  // Hotspot S5542: createCipher + DES, doblemente inseguro.
  const cipher: Cipher = createCipher('des', secret);
  return cipher.update(plaintext, 'utf8', 'base64') + cipher.final('base64');
}
