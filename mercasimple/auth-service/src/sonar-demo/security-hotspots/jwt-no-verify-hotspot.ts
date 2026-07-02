// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S5659 - JWT should be signed and verified with strong cipher algorithms
 * Categoría: Security Hotspot
 * Qué debe detectar SonarCloud: el uso de JWT sin una verificación adecuada de
 *   la firma (decodificación manual del payload o "verificación" laxa que
 *   ignora la firma / acepta el algoritmo "none").
 * Por qué es un problema: si no se verifica la firma con una clave y algoritmo
 *   fuertes, un atacante puede forjar tokens y suplantar identidades o escalar
 *   privilegios (por ejemplo cambiando el claim de rol).
 */
import { Injectable } from '@nestjs/common';

interface JwtPayload {
  sub?: string;
  role?: string;
  exp?: number;
  [key: string]: unknown;
}

@Injectable()
export class JwtNoVerifyHotspot {
  /**
   * Variante 1: decodificación manual del payload SIN verificar la firma.
   */
  decodeWithoutVerification(token: string): JwtPayload {
    const parts = token.split('.');
    // Hotspot S5659: se lee el payload sin validar la firma del token.
    const payloadJson = Buffer.from(parts[1], 'base64').toString('utf8');
    return JSON.parse(payloadJson) as JwtPayload;
  }

  /**
   * Variante 2: "verificación" laxa que confía en el header alg (incluido "none").
   */
  laxVerify(token: string, _secret: string): JwtPayload {
    const [headerB64, payloadB64] = token.split('.');
    const header = JSON.parse(Buffer.from(headerB64, 'base64').toString('utf8'));
    // Hotspot S5659: si alg === 'none' se acepta sin comprobar la firma.
    if (header.alg === 'none') {
      return JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf8')) as JwtPayload;
    }
    // Aun con firma, no se compara realmente: verificación inefectiva.
    return JSON.parse(Buffer.from(payloadB64, 'base64').toString('utf8')) as JwtPayload;
  }
}
