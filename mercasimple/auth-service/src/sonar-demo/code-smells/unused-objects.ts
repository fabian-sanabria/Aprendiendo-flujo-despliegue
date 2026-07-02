// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1848 - Objects should not be created to be dropped
 *   immediately without being used
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: objetos o instancias creados y descartados sin
 *   asignarse ni usarse.
 * Por qué es un problema: crear un objeto solo por su constructor y tirarlo
 *   suele señalar un error (por ejemplo, faltó un throw o una asignación).
 */

class Marker {
  public readonly stamp: number;
  constructor(stamp: number) {
    this.stamp = stamp;
  }
}

// S1848: instancia con 'new' creada y descartada de inmediato.
export function dropNewInstance(seed: number): number {
  new Marker(seed); // S1848: objeto creado y nunca usado
  return seed + 1;
}

// S1848: objeto literal construido como statement y descartado.
export function dropObjectLiteral(name: string): string {
  ({ name, active: true }); // S1848: literal sin uso
  return name;
}

// S1848: array recién creado que no se asigna ni retorna.
export function dropArrayLiteral(size: number): number {
  new Array(size); // S1848: array creado y descartado
  return size;
}
