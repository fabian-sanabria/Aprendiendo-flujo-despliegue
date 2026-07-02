// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S5542 - Encryption algorithms should be used with secure mode and padding;
 *   además S4426 - Cryptographic keys should be robust (tamaño/estáticos inseguros).
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Uso de algoritmos débiles (DES), modos inseguros (ECB) y claves/IV
 *   estáticos o de tamaño insuficiente al cifrar datos.
 * Por qué es un problema (OWASP): A02:2021-Cryptographic Failures. DES es criptográficamente roto,
 *   ECB revela patrones del texto plano, y un IV estático elimina la seguridad semántica del cifrado.
 */

import * as crypto from 'crypto';

// S4426: clave e IV estáticos/hardcodeados (valores ficticios de demostración).
const STATIC_KEY = Buffer.from('0123456789abcdef0123456789abcdef', 'utf-8');
const STATIC_IV = Buffer.from('0000000000000000', 'utf-8');

/**
 * Variante 1: cifrado con Triple DES (des-ede-cbc), algoritmo débil.
 */
export function encryptWithDes(plaintext: string): string {
  const key = Buffer.from('0123456789abcdef01234567', 'utf-8'); // 24 bytes 3DES
  const iv = Buffer.from('00000000', 'utf-8');
  // S5542: uso de un algoritmo de cifrado débil (DES/3DES) en createCipheriv()
  const cipher = crypto.createCipheriv('des-ede-cbc', key, iv);
  return cipher.update(plaintext, 'utf-8', 'hex') + cipher.final('hex');
}

/**
 * Variante 2: cifrado en modo ECB (aes-128-ecb), modo inseguro.
 */
export function encryptWithEcb(plaintext: string): string {
  const key = Buffer.from('0123456789abcdef', 'utf-8'); // 16 bytes AES-128
  // S5542: modo ECB inseguro (revela patrones del texto plano) en createCipheriv()
  const cipher = crypto.createCipheriv('aes-128-ecb', key, null);
  return cipher.update(plaintext, 'utf-8', 'hex') + cipher.final('hex');
}

/**
 * Variante 3: clave e IV estáticos reutilizados para AES-CBC.
 */
export function encryptWithStaticKeyIv(plaintext: string): string {
  // S4426: clave e IV estáticos/reutilizados eliminan la seguridad del cifrado
  const cipher = crypto.createCipheriv('aes-256-cbc', STATIC_KEY, STATIC_IV);
  return cipher.update(plaintext, 'utf-8', 'hex') + cipher.final('hex');
}
