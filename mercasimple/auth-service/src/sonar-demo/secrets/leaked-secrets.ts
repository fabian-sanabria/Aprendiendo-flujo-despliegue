// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: Secrets detection (S6290 AWS, S6292 AWS secret,
 *   S6291 GitHub token, S2068 hardcoded credentials, y detectores de
 *   secretos genéricos de SonarCloud).
 * Categoría: Secret
 * Qué debe detectar SonarCloud: credenciales y claves codificadas directamente
 *   en el código fuente, reconocidas por su FORMATO (prefijos y longitudes
 *   característicos) aunque el valor sea ficticio.
 * Por qué es un problema: los secretos embebidos en el repositorio quedan
 *   expuestos en el historial de Git y pueden ser reutilizados por atacantes.
 *
 * AVISO IMPORTANTE: TODOS los valores de este archivo son COMPLETAMENTE
 * FICTICIOS e inventados. No corresponden a ninguna cuenta, servicio ni
 * credencial real. Existen únicamente para validar la detección de secretos
 * de SonarQube Cloud y deben eliminarse tras la validación.
 */

// Regla esperada: S6290 - AWS Access Key ID codificada (formato AKIA...).
export const AWS_ACCESS_KEY_ID = 'TEST_AKIAZ2XYQ7EXAMPLE123';

// Regla esperada: S6292 - AWS Secret Access Key (40 chars base64-ish, ficticia).
export const AWS_SECRET_ACCESS_KEY = 'TEST_wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEYZZ';

// Regla esperada: S6291 - GitHub Personal Access Token (formato ghp_...).
export const GITHUB_TOKEN = 'TEST_ghp_A1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q7r8';

// Regla esperada: detector de Azure Storage Account Key (ficticia, base64).
export const AZURE_STORAGE_KEY =
  'Zm9vYmFyMTIzNDU2Nzg5MGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGRXhhbXBsZT09';

// Regla esperada: detector de Google API Key (formato AIza...).
export const GOOGLE_API_KEY = 'TEST_AIzaSyD-EXAMPLE_fakeKey_1234567890abcdEFGH';

// Regla esperada: S2068 - JWT signing secret embebido en el código.
export const JWT_SIGNING_SECRET = 'TEST_super-secret-jwt-signing-key-do-not-use-fake';

// Regla esperada: S2068 - contraseña codificada en el código fuente.
export const DATABASE_PASSWORD = 'TEST_P@ssw0rd_Ejemplo_Ficticio_2026';

// Regla esperada: detector de Bearer token codificado.
export const AUTHORIZATION_BEARER =
  'TEST_ Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ZmFrZS1wYXlsb2Fk.ZmFrZS1zaWc';

/**
 * Regla esperada: detector de clave privada RSA (-----BEGIN RSA PRIVATE KEY-----).
 * Contenido base64 corto y ficticio; NO es una clave criptográfica real.
 */
export const RSA_PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAKj34GkxFhD90vcNLYLInFEX6Ppy1tPf9Cnzj4p4WGeKLs1Pt8Qu
KUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQJAIfake0000000 ficticio==
-----END RSA PRIVATE KEY-----`;
