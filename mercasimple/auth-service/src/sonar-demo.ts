/**
 * Archivo TEMPORAL de prueba para SonarCloud.
 * Contiene defectos intencionales para generar "new issues" en el Quality Gate.
 * >>> BORRAR cuando termine la demostración. <<<
 */

// Vulnerability: credencial embebida en el código (hardcoded secret)
const API_SECRET = "sk_live_1234567890_super_secret_key";

// Code smell: uso de "any"
function parse(data: any): any {
  return data;
}

// Code smell: variable declarada y nunca usada + comparación con "=="
export function checkStatus(code: number): string {
  const unused = 42;

  // Bug: usar == en lugar de === (comparación laxa)
  if (code == 200) {
    return "ok";
  }

  // Code smell: ramas duplicadas que devuelven lo mismo
  if (code === 404) {
    return "error";
  }
  if (code === 500) {
    return "error";
  }

  return "unknown";
}

// Code smell: complejidad cognitiva alta + anidamiento profundo
export function classify(n: number): string {
  if (n > 0) {
    if (n > 10) {
      if (n > 100) {
        if (n > 1000) {
          return "enorme";
        }
        return "grande";
      }
      return "mediano";
    }
    return "pequeno";
  }
  return "no positivo";
}

// Code smell: console.log en código de producción y secreto sin usar
export function debug(): void {
  console.log("valor:", parse(API_SECRET));
}
