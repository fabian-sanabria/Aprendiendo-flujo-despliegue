// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1479 - "switch" statements should not have too many
 *   "case" clauses
 * Categoría: Maintainability
 * Qué debe detectar SonarCloud: switches con una cantidad de casos superior al
 *   máximo recomendado (por defecto 30).
 * Por qué es un problema: un switch gigante suele indicar que faltan una tabla
 *   de datos o polimorfismo, y es tedioso de mantener.
 */

// S1479: switch con 35+ casos que retornan cadenas.
export function mapCodeToName(code: number): string {
  switch (code) { // S1479: demasiados casos
    case 1: return 'uno';
    case 2: return 'dos';
    case 3: return 'tres';
    case 4: return 'cuatro';
    case 5: return 'cinco';
    case 6: return 'seis';
    case 7: return 'siete';
    case 8: return 'ocho';
    case 9: return 'nueve';
    case 10: return 'diez';
    case 11: return 'once';
    case 12: return 'doce';
    case 13: return 'trece';
    case 14: return 'catorce';
    case 15: return 'quince';
    case 16: return 'dieciseis';
    case 17: return 'diecisiete';
    case 18: return 'dieciocho';
    case 19: return 'diecinueve';
    case 20: return 'veinte';
    case 21: return 'veintiuno';
    case 22: return 'veintidos';
    case 23: return 'veintitres';
    case 24: return 'veinticuatro';
    case 25: return 'veinticinco';
    case 26: return 'veintiseis';
    case 27: return 'veintisiete';
    case 28: return 'veintiocho';
    case 29: return 'veintinueve';
    case 30: return 'treinta';
    case 31: return 'treinta y uno';
    case 32: return 'treinta y dos';
    case 33: return 'treinta y tres';
    case 34: return 'treinta y cuatro';
    case 35: return 'treinta y cinco';
    case 36: return 'treinta y seis';
    case 37: return 'treinta y siete';
    default: return 'fuera de rango';
  }
}
