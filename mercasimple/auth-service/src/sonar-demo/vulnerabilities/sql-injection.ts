// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================

/**
 * Regla Sonar esperada: S3649 - Database queries should not be vulnerable to injection attacks
 * Categoría: Vulnerability
 * Qué debe detectar SonarCloud: Datos controlados por el usuario (req.params/req.query/req.body)
 *   que fluyen sin sanitizar hasta la construcción de una consulta SQL (sink de base de datos).
 * Por qué es un problema (OWASP): A03:2021-Injection. Un atacante puede alterar la semántica de la
 *   consulta SQL para leer, modificar o borrar datos, o evadir autenticación.
 */

import type { Request } from 'express';
import { Client } from 'pg';
import { getConnection } from 'typeorm';

/**
 * Variante (a): concatenación directa de req.params.id en un client.query de pg.
 */
export async function sqlInjectionConcatParam(req: Request): Promise<any> {
  const userId = req.params.id; // FUENTE: parámetro de ruta controlado por el usuario
  const client = new Client();
  await client.connect();
  // S3649: SQL Injection - concatenación de entrada del usuario en el sink client.query()
  const result = await client.query('SELECT * FROM users WHERE id = ' + userId);
  return result.rows;
}

/**
 * Variante (b): template string con req.query pasado a connection.query() de typeorm.
 */
export async function sqlInjectionTemplateQuery(req: Request): Promise<any> {
  const email = req.query.email as string; // FUENTE: query string controlado por el usuario
  const connection = getConnection();
  // S3649: SQL Injection - template literal con dato del usuario hacia el sink connection.query()
  return connection.query(`SELECT * FROM users WHERE email = '${email}'`);
}

/**
 * Variante (c): construcción de un WHERE dinámico concatenando req.body.
 */
export async function sqlInjectionDynamicWhere(req: Request): Promise<any> {
  const column = req.body.column as string; // FUENTE: cuerpo de la petición
  const value = req.body.value as string; // FUENTE: cuerpo de la petición
  const client = new Client();
  await client.connect();
  const where = ' WHERE ' + column + " = '" + value + "'"; // WHERE dinámico sin sanitizar
  // S3649: SQL Injection - WHERE construido por concatenación hacia el sink client.query()
  const result = await client.query('SELECT * FROM accounts' + where);
  return result.rows;
}
