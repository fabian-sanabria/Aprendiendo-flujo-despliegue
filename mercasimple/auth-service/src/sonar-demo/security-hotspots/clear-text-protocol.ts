// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S5332 - Using clear-text protocols is security-sensitive
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso de protocolos sin cifrar como `http://`,
 *   el módulo `http` para llamadas sensibles, o referencias a `ftp://` /
 *   `telnet://` en cadenas de conexión.
 * Por qué es un problema: los protocolos en texto claro transmiten datos y
 *   credenciales sin cifrado, permitiendo su interceptación y manipulación
 *   (ataques man-in-the-middle).
 */
import * as http from 'http';

/**
 * Variante 1: URLs de servicios internos servidas por HTTP en texto claro.
 */
export const INTERNAL_SERVICE_URL = 'http://internal-api.example.com/v1/users';
// Hotspot S5332: endpoint sensible expuesto sobre http:// sin cifrar.
export const LEGACY_FTP_ENDPOINT = 'ftp://files.example.com/backups';
// Hotspot S5332: FTP transmite credenciales y datos en texto claro.
export const LEGACY_TELNET_ENDPOINT = 'telnet://legacy-host.example.com:23';
// Hotspot S5332: telnet no cifra la sesión ni las credenciales.

/**
 * Variante 2: petición con el módulo `http` a un endpoint de autenticación.
 */
export function callAuthOverHttp(callback: (body: string) => void): void {
  // Hotspot S5332: llamada sensible (login) sobre HTTP sin TLS.
  const req = http.request(INTERNAL_SERVICE_URL, (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => callback(data));
  });
  req.end();
}

/**
 * Variante 3: construcción de una URL http:// a partir de un host dinámico.
 */
export function buildInsecureUrl(host: string, path: string): string {
  // Hotspot S5332: esquema http:// forzado en la construcción de la URL.
  return `http://${host}/${path}`;
}
