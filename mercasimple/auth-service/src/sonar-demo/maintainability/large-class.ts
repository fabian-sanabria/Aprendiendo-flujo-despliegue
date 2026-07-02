// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1200 - Classes should not be coupled to too many other
 *   classes / god class (clase demasiado grande con demasiadas responsabilidades)
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: una clase con demasiados métodos y
 *   responsabilidades heterogéneas (god class).
 * Por qué es un problema: viola el principio de responsabilidad única, es
 *   difícil de probar y concentra cambios de todo el sistema en un solo lugar.
 */

// S1200 / god class: clase con más de 15 métodos de dominios distintos.
export class MegaManager {
  private counter = 0;

  // --- aritmética ---
  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return b === 0 ? 0 : a / b;
  }

  // --- cadenas ---
  public toUpper(value: string): string {
    return value.toUpperCase();
  }
  public toLower(value: string): string {
    return value.toLowerCase();
  }
  public reverse(value: string): string {
    return value.split('').reverse().join('');
  }
  public repeat(value: string, times: number): string {
    return value.repeat(times < 0 ? 0 : times);
  }

  // --- colecciones ---
  public first(items: number[]): number {
    return items.length > 0 ? items[0] : 0;
  }
  public last(items: number[]): number {
    return items.length > 0 ? items[items.length - 1] : 0;
  }
  public sum(items: number[]): number {
    return items.reduce((acc, n) => acc + n, 0);
  }
  public max(items: number[]): number {
    return items.length > 0 ? Math.max(...items) : 0;
  }

  // --- estado interno ---
  public increment(): number {
    this.counter += 1;
    return this.counter;
  }
  public decrement(): number {
    this.counter -= 1;
    return this.counter;
  }
  public reset(): void {
    this.counter = 0;
  }
  public current(): number {
    return this.counter;
  }

  // --- formateo ---
  public formatLabel(name: string, value: number): string {
    return `${name}=${value}`;
  }
  public formatBool(flag: boolean): string {
    return flag ? 'si' : 'no';
  }
}
