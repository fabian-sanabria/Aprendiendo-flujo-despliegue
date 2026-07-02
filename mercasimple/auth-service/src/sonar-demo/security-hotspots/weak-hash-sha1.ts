// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S4790 - Using weak hashing algorithms is security-sensitive
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso del algoritmo de hash criptográfico
 *   débil SHA-1 mediante `crypto.createHash('sha1')`.
 * Por qué es un problema: SHA-1 tiene colisiones prácticas demostradas y se
 *   considera obsoleto para cualquier uso de seguridad (firmas, integridad,
 *   derivación de identificadores sensibles).
 */
import { createHash } from 'crypto';

/**
 * Variante 1: SHA-1 para firmar/derivar la huella de un documento.
 */
export function documentFingerprintSha1(data: string): string {
  // Hotspot S4790: SHA-1 es vulnerable a colisiones (ataque SHAttered).
  return createHash('sha1').update(data).digest('hex');
}

/**
 * Variante 2: SHA-1 para generar un identificador de API key "único".
 */
export function apiKeyIdSha1(apiKey: string): string {
  // Hotspot S4790: SHA-1 no debe usarse para identificar secretos.
  const hash = createHash('sha1');
  hash.update(apiKey, 'utf8');
  return hash.digest('base64');
}
