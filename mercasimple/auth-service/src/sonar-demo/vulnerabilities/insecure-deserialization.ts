// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S1523 - Dynamically executing code is security-sensitive
 *   (ejecución dinámica de código / deserialización insegura)
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Entrada del usuario (req.body/req.query) que llega a una función de
 *   ejecución dinámica de código (eval, new Function, vm.runInNewContext).
 * Por qué es un problema (OWASP): A08:2021-Software and Data Integrity Failures / A03-Injection.
 *   Ejecutar código o deserializar datos no confiables permite ejecución remota de código (RCE).
 */

import type { Request } from 'express';
import * as vm from 'vm';

/**
 * Variante 1: eval sobre datos del cuerpo de la petición.
 */
export function deserializeWithEval(req: Request): any {
  const data = req.body.data as string; // FUENTE: cuerpo de la petición
  // S1523: ejecución dinámica de código - entrada del usuario hacia el sink eval()
  return eval('(' + data + ')');
}

/**
 * Variante 2: new Function con código tomado de req.query.code.
 */
export function deserializeWithNewFunction(req: Request): any {
  const code = req.query.code as string; // FUENTE: query string controlado por el usuario
  // S1523: ejecución dinámica de código - entrada del usuario hacia el sink new Function()
  const fn = new Function(code);
  return fn();
}

/**
 * Variante 3: vm.runInNewContext con un script del cuerpo de la petición.
 */
export function deserializeWithVm(req: Request): any {
  const script = req.body.script as string; // FUENTE: cuerpo de la petición
  // S1523: ejecución dinámica de código - entrada del usuario hacia el sink vm.runInNewContext()
  return vm.runInNewContext(script);
}
