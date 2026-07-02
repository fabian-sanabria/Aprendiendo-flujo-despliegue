// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: patrón de fuga de memoria (listeners que nunca
 *   se remueven, cachés que crecen sin límite, intervalos sin clearInterval).
 * Categoría: Bug
 * Qué debe detectar SonarCloud: acumulación no acotada de recursos que impide
 *   al recolector de basura liberar memoria.
 * Por qué es un problema: el proceso consume memoria de forma creciente hasta
 *   degradarse o caer por OOM.
 *
 * NOTA: los exports llevan 'leak' en el nombre para que el smoke test los omita.
 * Aun así son seguros: NO arrancan timers reales al llamarlos.
 */
import { EventEmitter } from 'events';

// Caché a nivel de módulo que nunca se limpia.
const cacheModulo: string[] = [];

/**
 * Ejemplo 1: registra un listener en cada llamada y jamás lo remueve.
 * Recibe el EventEmitter por parámetro (no crea recursos globales).
 */
export function leakListeners(emisor: EventEmitter): void {
  // Fuga: se agrega un listener nuevo en cada invocación sin removeListener
  emisor.on('data', function manejador() {
    cacheModulo.push('evento');
  });
}

/**
 * Ejemplo 2: caché de módulo que crece sin límite en cada llamada.
 */
export function leakGrowingCache(clave: string): number {
  // Fuga: nunca se libera ni se acota 'cacheModulo'
  cacheModulo.push(clave);
  return cacheModulo.length;
}

/**
 * Ejemplo 3: patrón de setInterval sin clearInterval. El timer SOLO se crea si
 * 'arrancar' === true (por defecto false) para no dejar timers corriendo.
 */
export function leakIntervalSinClear(arrancar: boolean = false): void {
  if (arrancar === true) {
    // Fuga: setInterval sin su correspondiente clearInterval
    setInterval(function () {
      cacheModulo.push('tick');
    }, 1000);
  }
}
