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
export const PAYMENTS_AWS_ACCESS_KEY_ID = 'AKIA1PAYMENTS6QWER2DF';

// AWS Secret Access Key (40 chars) -> regla esperada S6290 (AWS secret key)
export const PAYMENTS_AWS_SECRET_ACCESS_KEY = 'pMxYc8DvBn2QeRt5UiOp7AsDfGhJk9LzXcVbNm4Q';

// GitHub Personal Access Token -> regla esperada S6292 (GitHub token detection)
export const PAYMENTS_GITHUB_TOKEN = 'ghp_Paym3ntsMnBv1234ZxCv5678AsDf9012QwEr56';

// Google API Key -> regla esperada S6334 (Google API key detection)
export const PAYMENTS_GOOGLE_API_KEY = 'AIzaSyC-Payments_7hGf2kLp9RsTx1WbNcMe0QaZdV';

// Azure Storage Account Key -> regla esperada S6338 (Azure key detection)
export const PAYMENTS_AZURE_STORAGE_KEY =
  'DefaultEndpointsProtocol=https;AccountName=paymentsacct;AccountKey=UGF5bWVudHNBenVyZUtleUZpY3RpY2lvdXMxMTIyMzM0NDU1NjY3Nzg4OTlhYWJiY2M9PQ==;EndpointSuffix=core.windows.net';

// JWT Secret embebido -> regla esperada S2068 (hard-coded credentials)
export const PAYMENTS_JWT_SECRET = 'payments-jwt-s3cr3t-0f1e2d3c4b5a6978-superFicticio';

// Password embebido -> regla esperada S2068 (hard-coded password)
export const PAYMENTS_DB_PASSWORD = 'P4ym3nts_Db#Passw0rd!2026';

// Bearer token embebido -> regla esperada S6292 / S2068 (hard-coded token)
export const PAYMENTS_BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdmMiOiJwYXltZW50cyJ9.Fict1ci0usPaym3ntsSignatureMnBvCx';

// Stripe Secret Key (contexto de pagos) -> regla esperada S6292 (Stripe key detection)
export const PAYMENTS_STRIPE_SECRET_KEY = 'sk_live_Paym3nts51Fict1ci0usAbCdEfGhIjKlMnOpQrStUvWx';
