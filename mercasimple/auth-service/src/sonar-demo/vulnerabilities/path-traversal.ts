// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S2083 - I/O function calls should not be vulnerable to path injection attacks
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Entrada del usuario (req.query/req.params) usada sin validar para
 *   construir una ruta de archivo que llega a una función de E/S del sistema de archivos.
 * Por qué es un problema (OWASP): A01:2021-Broken Access Control / Path Traversal. Con secuencias
 *   como "../" un atacante puede leer archivos fuera del directorio previsto (p.ej. /etc/passwd).
 */

import type { Request } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = '/data/uploads';

/**
 * Variante 1: readFileSync con la ruta concatenada desde req.query.file.
 */
export function pathTraversalReadFileSync(req: Request): string {
  const file = req.query.file as string; // FUENTE: query string controlado por el usuario
  // S2083: Path Traversal - concatenación de entrada del usuario en el sink fs.readFileSync()
  return fs.readFileSync('/data/' + file, 'utf-8');
}

/**
 * Variante 2: createReadStream con path.join(base, req.params.name).
 */
export function pathTraversalCreateReadStream(req: Request): fs.ReadStream {
  const name = req.params.name; // FUENTE: parámetro de ruta controlado por el usuario
  const fullPath = path.join(BASE_DIR, name); // path.join no neutraliza "../"
  // S2083: Path Traversal - ruta con dato del usuario hacia el sink fs.createReadStream()
  return fs.createReadStream(fullPath);
}

/**
 * Variante 3: readFile asíncrono con la ruta tomada directamente de req.query.path.
 */
export function pathTraversalReadFile(req: Request): void {
  const userPath = req.query.path as string; // FUENTE: query string controlado por el usuario
  // S2083: Path Traversal - la entrada del usuario ES la ruta en el sink fs.readFile()
  fs.readFile(userPath, 'utf-8', (err, data) => {
    void err;
    void data;
  });
}
