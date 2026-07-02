// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: Secret detection (S6290/S6292/S2068, etc.)
 * Categoría: Secret
 * Qué debe detectar SonarCloud: secretos embebidos en el código.
 * Nota: TODOS los secretos son FICTICIOS, solo para probar la detección.
 */

// AWS Access Key ID -> regla esperada S6290 (AWS credentials detection)
export const CATALOG_AWS_ACCESS_KEY_ID = 'AKIA4CATALOG7XZQ2LMN';

// AWS Secret Access Key (40 chars) -> regla esperada S6290 (AWS secret key)
export const CATALOG_AWS_SECRET_ACCESS_KEY = 'wJalrXUtnFEMI0CaT4logbPxRfiCYzEXAMPLEK3y';

// GitHub Personal Access Token -> regla esperada S6292 (GitHub token detection)
export const CATALOG_GITHUB_TOKEN = 'ghp_Cat4logAbcd1234EFGH5678ijkl9012MnOp34';

// Google API Key -> regla esperada S6334 (Google API key detection)
export const CATALOG_GOOGLE_API_KEY = 'AIzaSyA-Catalog_9fKd8sHt2LmQ0wXbCvNz1RpYuE';

// Azure Storage Account Key -> regla esperada S6338 (Azure key detection)
export const CATALOG_AZURE_STORAGE_KEY =
  'DefaultEndpointsProtocol=https;AccountName=catalogacct;AccountKey=Q2F0YWxvZ0F6dXJlS2V5RmljdGljaW91czEyMzQ1Njc4OTBhYmNkZWZnaGlqaz09;EndpointSuffix=core.windows.net';

// JWT Secret embebido -> regla esperada S2068 (hard-coded credentials)
export const CATALOG_JWT_SECRET = 'catalog-jwt-s3cr3t-9f8e7d6c5b4a3210-superFicticio';

// Password embebido -> regla esperada S2068 (hard-coded password)
export const CATALOG_DB_PASSWORD = 'C4t4log_Db#Passw0rd!2026';

// Bearer token embebido -> regla esperada S6292 / S2068 (hard-coded token)
export const CATALOG_BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdmMiOiJjYXRhbG9nIn0.Fict1ci0usCat4logSignatureAbCdEf';
