// ======================================================
// SONAR TEST FILE
// GENERATED ONLY FOR SONARQUBE TESTING
// REMOVE AFTER VALIDATION
// ======================================================
/**
 * Regla Sonar esperada: S1128 - Unnecessary imports should be removed
 * Categoría: Code Smell
 * Qué debe detectar SonarCloud: símbolos importados que nunca se referencian.
 * Por qué es un problema: los imports muertos generan ruido, ralentizan el
 *   análisis mental de dependencias y pueden ocultar acoplamientos reales.
 */

// S1128: import de @nestjs/common nunca usado.
import { Injectable } from '@nestjs/common';
// S1128: import de typeorm nunca usado.
import { Entity } from 'typeorm';
// S1128: import de rxjs nunca usado.
import { of } from 'rxjs';
// S1128: import de builtin crypto nunca usado.
import { randomUUID } from 'crypto';

// La función solo hace aritmética pura; ninguno de los imports se usa.
export function sumTwoNumbers(a: number, b: number): number {
  return a + b;
}

// Otra función independiente que tampoco toca los imports declarados.
export function concatLabels(prefix: string, suffix: string): string {
  return `${prefix}-${suffix}`;
}
