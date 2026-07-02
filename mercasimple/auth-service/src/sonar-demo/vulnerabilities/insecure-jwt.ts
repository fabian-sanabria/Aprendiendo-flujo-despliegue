// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S5659 - JWT should be signed and verified with strong cipher algorithms;
 *   además S2068 - Credentials should not be hard-coded (secreto JWT embebido).
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Tokens JWT decodificados sin verificar la firma, verificación que
 *   acepta el algoritmo 'none', y un secreto de firma JWT escrito directamente en el código.
 * Por qué es un problema (OWASP): A02:2021-Cryptographic Failures / A07-Identification & Auth Failures.
 *   Confiar en un JWT sin verificar la firma (o aceptando 'none') permite falsificar identidades;
 *   un secreto hardcodeado puede filtrarse y comprometer todos los tokens.
 */

import type { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

// S2068: secreto JWT hardcodeado (valor claramente ficticio).
const HARDCODED_JWT_SECRET = 'super-secret-demo-key-1234567890';

/**
 * Variante 1: decodificar el payload sin verificar la firma (split + Buffer base64).
 */
export function jwtDecodeWithoutVerify(req: Request): any {
  const token = req.query.token as string; // FUENTE: query string controlado por el usuario
  // S5659: se decodifica el payload SIN verificar la firma del JWT
  const payloadPart = token.split('.')[1];
  const decoded = Buffer.from(payloadPart, 'base64').toString('utf-8');
  return JSON.parse(decoded);
}

/**
 * Variante 2: verificar aceptando el algoritmo 'none' (firma no verificada realmente).
 */
export function jwtVerifyAlgNone(req: Request): any {
  const token = req.body.token as string; // FUENTE: cuerpo de la petición
  const jwtService = new JwtService();
  // S5659: aceptar el algoritmo 'none' equivale a no verificar la firma
  return jwtService.verify(token, {
    secret: HARDCODED_JWT_SECRET,
    algorithms: ['none' as any],
  });
}

/**
 * Variante 3: firmar un token usando el secreto hardcodeado.
 */
export function jwtSignWithHardcodedSecret(req: Request): string {
  const userId = req.body.userId as string; // FUENTE: cuerpo de la petición
  const jwtService = new JwtService();
  // S2068: uso de un secreto JWT hardcodeado para firmar el token
  return jwtService.sign({ sub: userId }, { secret: HARDCODED_JWT_SECRET });
}
