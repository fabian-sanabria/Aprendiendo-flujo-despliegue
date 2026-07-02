// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S2076 - OS commands should not be vulnerable to command injection attacks
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Entrada del usuario (req.query/req.body) que llega sin sanitizar a
 *   una función de ejecución de comandos del sistema operativo (exec/execSync/spawn con shell).
 * Por qué es un problema (OWASP): A03:2021-Injection. Permite ejecutar comandos arbitrarios en el
 *   servidor (RCE), comprometiendo por completo el host.
 */

import type { Request } from 'express';
import { exec, execSync, spawn } from 'child_process';

/**
 * Variante 1: exec con host concatenado desde req.query.host.
 */
export function commandInjectionExec(req: Request): void {
  const host = req.query.host as string; // FUENTE: query string controlado por el usuario
  // S2076: Command Injection - concatenación de entrada del usuario en el sink exec()
  exec('ping -c 1 ' + host, (err, stdout) => {
    void err;
    void stdout;
  });
}

/**
 * Variante 2: execSync con el comando tomado directamente de req.body.cmd.
 */
export function commandInjectionExecSync(req: Request): string {
  const cmd = req.body.cmd as string; // FUENTE: cuerpo de la petición
  // S2076: Command Injection - la entrada del usuario ES el comando en el sink execSync()
  const output = execSync(cmd);
  return output.toString();
}

/**
 * Variante 3: spawn con shell ('sh -c') y argumento controlado por el usuario.
 */
export function commandInjectionSpawnShell(req: Request): void {
  const x = req.query.x as string; // FUENTE: query string controlado por el usuario
  // S2076: Command Injection - dato del usuario dentro de 'sh -c' en el sink spawn()
  const child = spawn('sh', ['-c', x], { shell: true });
  void child;
}
