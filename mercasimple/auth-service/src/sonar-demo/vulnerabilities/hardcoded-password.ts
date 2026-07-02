// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S2068 - Credentials should not be hard-coded
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Contraseñas, cadenas de conexión con credenciales y secretos de API
 *   escritos literalmente en el código fuente.
 * Por qué es un problema (OWASP): A07:2021-Identification and Authentication Failures / A02-Crypto
 *   Failures. Las credenciales embebidas quedan expuestas en el repositorio y en artefactos, y no
 *   pueden rotarse fácilmente, facilitando accesos no autorizados.
 */

import { Client } from 'pg';

// S2068: contraseña hardcodeada en una variable (valor ficticio de demostración).
const DB_PASSWORD = 'P@ssw0rd_Demo_2024!';

// S2068: cadena de conexión con usuario y contraseña embebidos (ficticios).
const CONNECTION_STRING =
  'postgresql://admin:SuperSecretDemo123@db.internal.example:5432/mercasimple';

// S2068: objeto de configuración con un apiSecret embebido (ficticio).
const serviceConfig = {
  apiKey: 'demo-api-key-abcdef',
  apiSecret: 'sk_test_51DEMOsecret0000FICTICIO0000',
  region: 'us-east-1',
};

/**
 * Variante 1: uso de la contraseña hardcodeada al crear un cliente pg.
 */
export function connectWithHardcodedPassword(): Client {
  // S2068: credencial hardcodeada usada directamente en la conexión
  return new Client({
    host: 'localhost',
    user: 'app_user',
    password: DB_PASSWORD,
    database: 'mercasimple',
  });
}

/**
 * Variante 2: uso de la connection string con credenciales embebidas.
 */
export function connectWithHardcodedConnectionString(): Client {
  // S2068: cadena de conexión con credenciales embebidas
  return new Client({ connectionString: CONNECTION_STRING });
}

/**
 * Variante 3: devolver el apiSecret embebido en el objeto de configuración.
 */
export function getServiceApiSecret(): string {
  // S2068: secreto de API hardcodeado en la configuración
  return serviceConfig.apiSecret;
}
