/**
 * Pruebas TEMPORALES para sonar-demo.ts.
 * Generan cobertura (lcov) para que SonarCloud la lea.
 * >>> BORRAR junto con sonar-demo.ts cuando termine la demostración. <<<
 */
import { checkStatus, classify, debug } from './sonar-demo';

describe('sonar-demo', () => {
  describe('checkStatus', () => {
    it('devuelve "ok" para 200', () => {
      expect(checkStatus(200)).toBe('ok');
    });

    it('devuelve "error" para 404', () => {
      expect(checkStatus(404)).toBe('error');
    });

    it('devuelve "error" para 500', () => {
      expect(checkStatus(500)).toBe('error');
    });

    it('devuelve "unknown" para cualquier otro código', () => {
      expect(checkStatus(301)).toBe('unknown');
    });
  });

  describe('classify', () => {
    it('clasifica valores no positivos', () => {
      expect(classify(0)).toBe('no positivo');
      expect(classify(-5)).toBe('no positivo');
    });

    it('clasifica valores pequeños', () => {
      expect(classify(5)).toBe('pequeno');
    });

    it('clasifica valores medianos', () => {
      expect(classify(50)).toBe('mediano');
    });

    it('clasifica valores grandes', () => {
      expect(classify(500)).toBe('grande');
    });

    it('clasifica valores enormes', () => {
      expect(classify(5000)).toBe('enorme');
    });
  });

  describe('debug', () => {
    it('escribe en consola sin lanzar', () => {
      const spy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
      expect(() => debug()).not.toThrow();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
