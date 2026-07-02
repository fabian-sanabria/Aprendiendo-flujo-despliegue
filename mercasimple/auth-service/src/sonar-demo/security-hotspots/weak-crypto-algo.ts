// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S5547 - Cipher algorithms should be robust
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso de algoritmos de cifrado obsoletos o
 *   débiles (DES, RC4) y de modos inseguros (ECB) al construir un cifrador.
 * Por qué es un problema: DES tiene una clave demasiado corta (56 bits), RC4
 *   tiene sesgos estadísticos explotables y el modo ECB filtra patrones del
 *   texto claro; ninguno ofrece confidencialidad adecuada.
 */
import { createCipheriv } from 'crypto';

/**
 * Variante 1: algoritmo DES (clave de 56 bits, considerado roto).
 */
export function encryptWithDes(plaintext: string, key: Buffer, iv: Buffer): string {
  // Hotspot S5547: DES es un algoritmo obsoleto y débil.
  const cipher = createCipheriv('des-cbc', key, iv);
  return cipher.update(plaintext, 'utf8', 'hex') + cipher.final('hex');
}

/**
 * Variante 2: RC4 y, alternativamente, AES en modo ECB (sin IV, inseguro).
 */
export function encryptWithRc4OrEcb(plaintext: string, key: Buffer): string {
  // Hotspot S5547: RC4 tiene sesgos estadísticos explotables.
  const rc4 = createCipheriv('rc4', key, Buffer.alloc(0));
  const rc4Out = rc4.update(plaintext, 'utf8', 'hex') + rc4.final('hex');

  // Hotspot S5547: modo ECB filtra patrones del texto claro.
  const ecb = createCipheriv('aes-128-ecb', key.slice(0, 16), null);
  const ecbOut = ecb.update(plaintext, 'utf8', 'hex') + ecb.final('hex');

  return `${rc4Out}:${ecbOut}`;
}
