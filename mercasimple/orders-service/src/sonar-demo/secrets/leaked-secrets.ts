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
export const ORDERS_AWS_ACCESS_KEY_ID = 'TEST_AKIA9ORDERS3PLKW8YHT';

// AWS Secret Access Key (40 chars) -> regla esperada S6290 (AWS secret key)
export const ORDERS_AWS_SECRET_ACCESS_KEY = 'TEST_bKpQmZ7XvNsE2rTyU9wLd3FhGjK1oIa5RcVbNm0P';

// GitHub Personal Access Token -> regla esperada S6292 (GitHub token detection)
export const ORDERS_GITHUB_TOKEN = 'TEST_ghp_Ord3rsZyxw9876VUTS5432rqpo1098LkJi76';

// Google API Key -> regla esperada S6334 (Google API key detection)
export const ORDERS_GOOGLE_API_KEY = 'TEST_AIzaSyB-Orders_3mNv7pQr1TsWx0YbAcDe5FgHiJk';

// Azure Storage Account Key -> regla esperada S6338 (Azure key detection)
export const ORDERS_AZURE_STORAGE_KEY =
  'DefaultEndpointsProtocol=https;AccountName=ordersacct;AccountKey=T3JkZXJzQXp1cmVLZXlGaWN0aWNpb3VzOTg3NjU0MzIxMHp5eHd2dXRzcnFwbz09;EndpointSuffix=core.windows.net';

// JWT Secret embebido -> regla esperada S2068 (hard-coded credentials)
export const ORDERS_JWT_SECRET = 'TEST_orders-jwt-s3cr3t-1a2b3c4d5e6f7080-superFicticio';

// Password embebido -> regla esperada S2068 (hard-coded password)
export const ORDERS_DB_PASSWORD = 'TEST_0rd3rs_Db#Passw0rd!2026';

// Bearer token embebido -> regla esperada S6292 / S2068 (hard-coded token)
export const ORDERS_BEARER_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdmMiOiJvcmRlcnMifQ.Fict1ci0us0rd3rsSignatureZyXwVu';
