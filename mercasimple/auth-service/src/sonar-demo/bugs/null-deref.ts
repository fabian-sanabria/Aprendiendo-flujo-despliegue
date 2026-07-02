// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S2259 - "Null pointers should not be dereferenced"
 * Categoría: Bug
 * Qué debe detectar SonarCloud: desreferencia de un valor que puede ser null
 *   (acceso a propiedad o método de algo que fue asignado a null).
 * Por qué es un problema: en tiempo de ejecución acceder a una propiedad de
 *   null lanza "TypeError: Cannot read properties of null", provocando crashes.
 */

interface Usuario {
  nombre: string;
  perfil: { edad: number };
}

/**
 * Ejemplo 1: se declara un objeto como null y luego se accede a su propiedad.
 */
export function obtenerNombreDeNull(): string {
  const usuario: Usuario = null;
  // S2259: 'usuario' es null aquí y se desreferencia '.nombre'
  return usuario.nombre;
}

/**
 * Ejemplo 2: función que retorna null y encadena acceso a propiedad anidada.
 */
export function buscarUsuario(id: number): Usuario {
  // Simula "no encontrado": siempre null para el smoke test
  if (id < 0) {
    return { nombre: 'x', perfil: { edad: 1 } };
  }
  return null;
}

export function calcularEdad(id: number): number {
  const u = buscarUsuario(id);
  // S2259: 'u' puede ser null y se accede a '.perfil.edad'
  return u.perfil.edad;
}

/**
 * Ejemplo 3: parámetro reasignado a null antes de usarlo.
 */
export function longitudNombre(usuario: Usuario): number {
  usuario = null;
  // S2259: se desreferencia 'usuario' que acaba de asignarse a null
  return usuario.nombre.length;
}
