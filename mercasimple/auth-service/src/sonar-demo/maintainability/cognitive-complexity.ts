// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S3776 - Cognitive Complexity of functions should not be
 *   too high
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: funciones con demasiadas ramas, anidamientos y
 *   operadores lógicos que elevan la complejidad cognitiva.
 * Por qué es un problema: cuesta mucho razonar sobre el flujo, lo que aumenta el
 *   riesgo de errores y el esfuerzo de mantenimiento.
 */

// S3776: muchos if/else anidados y operadores lógicos combinados.
export function classifyAccount(role: string, active: boolean, credit: number): string {
  let result = 'desconocido';
  if (role === 'admin') {
    if (active) {
      if (credit > 100) {
        result = 'admin-premium';
      } else if (credit > 50) {
        result = 'admin-medio';
      } else {
        result = 'admin-basico';
      }
    } else {
      if (credit > 0) {
        result = 'admin-inactivo-con-credito';
      } else {
        result = 'admin-inactivo';
      }
    }
  } else if (role === 'user') {
    if (active && credit > 20) {
      result = 'user-ok';
    } else if (active || credit > 0) {
      result = 'user-parcial';
    } else {
      result = 'user-bloqueado';
    }
  } else {
    if (active && credit > 0 && role !== '') {
      result = 'invitado-activo';
    } else {
      result = 'invitado';
    }
  }
  return result;
}

// S3776: cadena de validaciones con condiciones lógicas encadenadas.
export function validateOrder(qty: number, stock: number, vip: boolean, coupon: string): string {
  if (qty <= 0) {
    return 'cantidad invalida';
  }
  if (qty > stock) {
    if (vip && qty - stock < 5) {
      return 'backorder vip';
    } else if (!vip && qty - stock < 2) {
      return 'backorder normal';
    } else {
      return 'sin stock';
    }
  }
  if (coupon !== '') {
    if (coupon === 'VIP' && vip) {
      return 'descuento vip';
    } else if (coupon === 'GEN' && !vip) {
      return 'descuento general';
    } else if (coupon.length > 3 && qty > 10) {
      return 'descuento volumen';
    } else {
      return 'cupon ignorado';
    }
  }
  return 'ok';
}
