// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S5852 - Using slow regular expressions is security-sensitive (ReDoS)
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Una expresión regular con backtracking catastrófico evaluada sobre
 *   entrada del usuario, o una RegExp construida dinámicamente a partir de datos del usuario.
 * Por qué es un problema (OWASP): A06:2021 / Denial of Service. Una entrada maliciosa puede provocar
 *   un tiempo de evaluación exponencial, bloqueando el hilo y causando denegación de servicio.
 */

import type { Request } from 'express';

// Regex con grupo anidado cuantificado: backtracking catastrófico.
const CATASTROPHIC_REGEX = /^(a+)+$/; // S5852: patrón vulnerable a ReDoS

/**
 * Variante 1: evaluar una regex con backtracking catastrófico sobre req.query.q.
 */
export function regexDosCatastrophic(req: Request): boolean {
  const q = req.query.q as string; // FUENTE: query string controlado por el usuario
  // S5852: ReDoS - entrada del usuario evaluada contra una regex de backtracking catastrófico
  return CATASTROPHIC_REGEX.test(q);
}

/**
 * Variante 2: construcción dinámica de RegExp desde req.body.pattern.
 */
export function regexDosDynamicPattern(req: Request): RegExp {
  const pattern = req.body.pattern as string; // FUENTE: cuerpo de la petición
  // S5852: ReDoS - patrón controlado por el usuario usado para construir el sink new RegExp()
  const dynamicRegex = new RegExp(pattern);
  return dynamicRegex;
}
