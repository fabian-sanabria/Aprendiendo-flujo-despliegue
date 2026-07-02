# 🧪 SonarQube Cloud — Laboratorio de Validación (DESECHABLE)

> ⚠️ **TODO ESTE CÓDIGO ES SOLO PARA PROBAR SONARQUBE CLOUD.**
> No implementa ninguna funcionalidad real y **debe eliminarse tras la validación**.
> Cada archivo empieza con la cabecera `SONAR TEST FILE / REMOVE AFTER VALIDATION`.

Este laboratorio existe para comprobar, con un Pull Request real, que **SonarQube Cloud (plan Team)** detecta todas las familias de problemas de calidad y seguridad soportadas para **NestJS/TypeScript + Docker + YAML**.

---

## 1. Ubicación y por qué aquí

El lab **completo** vive en:

```
auth-service/src/sonar-demo/
```

Se concentró en `auth-service` porque es el servicio con **mayor margen de cobertura** (evita romper el `coverageThreshold` de Jest). Los otros 3 servicios reciben **solo** contenido de bajo impacto (secretos + IaC + un bloque duplicado) para demostrar detección multi-servicio sin arriesgar el CI:

```
catalog-service/src/sonar-demo/   ->  secrets/ , iac/ , duplication/
orders-service/src/sonar-demo/    ->  secrets/ , iac/ , duplication/
payments-service/src/sonar-demo/  ->  secrets/ , iac/ , duplication/
```

Todo cae dentro de `sonar.sources` (los `*/src`) declarado en `mercasimple/sonar-project.properties`, por lo que **será analizado**.

---

## 2. Compatibilidad con el plan Team (leer antes)

| Capacidad | ¿Detectable en Team? | Nota |
|---|---|---|
| Code Smells / Bugs / Maintainability | ✅ | Análisis nativo TS. |
| Vulnerabilities (taint: SQLi, cmd inj, path traversal…) | ✅ | Requiere flujo **fuente→sink**; se usan `req.query/body/params` (Express) para dispararlo. Si Sonar no resuelve la fuente, puede caer como **Hotspot** en vez de Vulnerability. |
| Security Hotspots | ✅ | Nativo. |
| Secrets Detection | ✅ | Incluido en SonarQube Cloud. |
| IaC — Dockerfile | ✅ | Analizador Docker (reconoce por nombre `Dockerfile*`). |
| IaC — Kubernetes (`deployment.yaml`) | ✅ | Analizador Kubernetes. |
| IaC — `docker-compose.yml` | ⚠️ | **NO** hay analizador dedicado; se parsea como YAML genérico (reglas mínimas). Incluido solo como demostración. |
| Duplicated Code (incl. cross-service) | ✅ | Mismo proyecto Sonar cubre los 4 `src`. |
| Coverage on New Code | ✅ | Vía `lcov`; los archivos sin test bajan la métrica. |
| **SCA / vulnerabilidades de dependencias** | ❌ **OMITIDO** | Requiere el add-on *Advanced Security*; no se generan ejemplos que nunca se detectarían. |

---

## 3. Estrategia de cobertura (por qué el CI sigue verde)

El job `test` del CI corre `jest --coverage` con `coverageThreshold.global = 10%`, y el job `sonarcloud` tiene `needs: test`. Si la cobertura global cayera bajo 10%, **Sonar nunca correría**.

Solución aplicada:
- `sonar-demo/_smoke.spec.ts` ejercita dinámicamente **solo** las categorías puras (`code-smells`, `bugs`, `maintainability`, `duplication`) → mantiene la cobertura global alta.
- Se dejan **sin test a propósito**: `coverage/`, `vulnerabilities/`, `security-hotspots/`, `secrets/` → así SonarCloud muestra **baja Coverage on New Code** y reporta los issues.

Cobertura tras el lab (todas > 10% ✅): auth 51% L / catalog 19% / orders 23% / payments 22%.

---

## 4. Tabla maestra de ejemplos

### 4.1 Code Smells — `code-smells/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `unused-variables.ts` | Variables locales declaradas y nunca usadas (3 variantes) | S1481 |
| `unused-parameters.ts` | Parámetros de función sin usar (3 variantes) | S1172 |
| `unnecessary-imports.ts` | Imports muertos (Injectable, Entity, rxjs `of`, `randomUUID`) | S1128 |
| `dead-code.ts` | Código inalcanzable tras `return`/`throw` | S1763 |
| `redundant-conditions.ts` | Condiciones redundantes / booleano gratuito / `else if` idéntico | S2589, S1862, S1125 |
| `always-true-if.ts` | Condición siempre verdadera (3 variantes) | S2583 |
| `always-false-if.ts` | Condición siempre falsa (3 variantes) | S2583 |
| `unnecessary-switch.ts` | `switch` con 1-2 casos (debería ser `if`) | S1301 |
| `useless-expressions.ts` | Expresiones sin efecto | S905 |
| `unused-objects.ts` | Objeto/instancia creada y nunca usada | S1848 |

### 4.2 Bugs — `bugs/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `null-deref.ts` | Desreferencia de valores `null` | S2259 |
| `undefined-access.ts` | Acceso a propiedades de `undefined` | S2259 |
| `floating-promise.ts` | Promesa no esperada (sin `await`) | S6544 / S4123 |
| `wrong-comparison.ts` | Operandos idénticos / `==` laxo / comparación siempre falsa | S1764, S2159 |
| `impossible-condition.ts` | Condición que nunca se cumple | S2583 |
| `unreachable-code.ts` | Código inalcanzable | S1763 |
| `init-errors.ts` | Uso antes de inicializar / store muerto | S1854, S3403 |
| `bad-exception-handling.ts` | `catch` vacío / excepción ignorada / rethrow perdiendo stack | S2486, S108 |
| `memory-leak.ts` | Listener no removido / cache creciente / `setInterval` sin `clearInterval` | fuga de memoria |

### 4.3 Vulnerabilities — `vulnerabilities/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `sql-injection.ts` | SQLi por concatenación de `req` en query (pg/typeorm, 3 variantes) | S3649 |
| `command-injection.ts` | `exec/execSync/spawn(shell)` con entrada de `req` | S2076 |
| `path-traversal.ts` | `fs.read*` con ruta desde `req` sin sanitizar | S2083 |
| `regex-dos.ts` | Regex con backtracking catastrófico / RegExp dinámica | S5852 |
| `insecure-jwt.ts` | JWT decodificado sin verificar / `alg:none` / secreto hardcodeado | S5659, S2068 |
| `hardcoded-password.ts` | Password / connection string / apiSecret embebidos | S2068 |
| `weak-crypto.ts` | DES / modo ECB / clave·IV estáticos | S5542, S4426 |
| `insecure-deserialization.ts` | `eval` / `new Function` / `vm.runInNewContext` con `req` | S1523 |

### 4.4 Security Hotspots — `security-hotspots/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `weak-hash-md5.ts` | Uso de MD5 | S4790 |
| `weak-hash-sha1.ts` | Uso de SHA-1 | S4790 |
| `insecure-random.ts` | `Math.random()` para material de seguridad | S2245 |
| `createcipher-legacy.ts` | `crypto.createCipher()` (obsoleto) | S5542 |
| `weak-crypto-algo.ts` | DES / RC4 / ECB | S5547 |
| `insecure-comparison.ts` | Comparación de secretos vulnerable a timing (`===` vs `timingSafeEqual`) | S6293 |
| `jwt-no-verify-hotspot.ts` | JWT usado sin verificación adecuada | S5659 |
| `clear-text-protocol.ts` | `http://` / ftp / telnet (protocolos sin cifrar) | S5332 |

### 4.5 Secrets — `secrets/leaked-secrets.ts` (auth + los 3 servicios, valores distintos)
| Secreto (ficticio) | Regla esperada |
|---|---|
| AWS Access Key (`AKIA…`) | S6290 |
| AWS Secret Access Key | S6290 |
| GitHub Token (`ghp_…`) | S6292 |
| Google API Key (`AIza…`) | S6334 |
| Azure Storage Key | S6338 |
| JWT / signing secret, DB password, Bearer token | S2068 / genéricos |
| RSA Private Key simulada (`-----BEGIN RSA PRIVATE KEY-----`) | S6706 |

### 4.6 Infrastructure as Code — `iac/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `Dockerfile` | `FROM node:latest`, `USER root`, `chmod 777`, `EXPOSE 22`, secreto en `ENV` | S6596, S6471 |
| `Dockerfile.privileged.dockerfile` | `ADD http://…` remoto, `curl … \| sh`, sin USER no-root | S6595 |
| `Dockerfile.secrets.dockerfile` | Credenciales en `ARG`/`ENV`, copia de `id_rsa`/`.env` | secretos IaC |
| `deployment-privileged.yaml` | `privileged`, `allowPrivilegeEscalation`, `runAsUser:0`, `capabilities:[ALL]`, `image:latest` | S6428, S6433 |
| `deployment-host-namespaces.yaml` | `hostNetwork/hostPID/hostIPC`, `hostPath:/` | S6870, S6433 |
| `deployment-insecure-ports.yaml` | `containerPort:22`, `runAsNonRoot:false`, sin `resources.limits` | S6897 y afines |
| `docker-compose.insecure.yml` | `privileged`, `network_mode:host`, `pid:host`, volumen `/:/host` | ⚠️ cobertura limitada |

### 4.7 Duplicated Code — `duplication/`
| Archivo | Qué debería detectar Sonar | Regla esperada |
|---|---|---|
| `duplicated-methods.ts` | Funciones con cuerpo idéntico (3) | S4144 |
| `duplicated-blocks.ts` | Bloque repetido 3× en el mismo archivo | Duplications |
| `shared-duplicated-block.ts` (×4 servicios, idéntico) | **Duplicación entre servicios** | Duplications |

### 4.8 Coverage — `coverage/` (SIN tests a propósito)
| Archivo | Qué debería detectar Sonar | Métrica |
|---|---|---|
| `uncovered-discounts.ts` | Ramas sin cubrir | Coverage on New Code ↓ |
| `uncovered-validators.ts` | Ramas sin cubrir | Coverage on New Code ↓ |
| `uncovered-state-machine.ts` | `switch` de estados sin cubrir | Coverage on New Code ↓ |

---

## 5. Cómo ejecutar la validación

1. Commit + push de la rama con el lab y abre un **Pull Request**.
2. El CI corre: `test` (×4, cobertura) → `sonarcloud` (análisis + Quality Gate).
3. En el PR, revisa el **check de SonarCloud** y la pestaña **Measures → New Code**:
   ✅ Bugs · ✅ Vulnerabilities · ✅ Security Hotspots · ✅ Code Smells · ✅ Secrets · ✅ IaC · ✅ Duplications · ✅ Coverage.
4. Como `sonar.qualitygate.wait=true`, es **esperado** que el Quality Gate **falle** (esa es la prueba de que detecta).

---

## 6. 🧹 Limpieza (borrar todo el lab)

```bash
cd mercasimple
git rm -r auth-service/src/sonar-demo \
          catalog-service/src/sonar-demo \
          orders-service/src/sonar-demo \
          payments-service/src/sonar-demo
git commit -m "chore: eliminar laboratorio de validación de SonarQube"
```

No se modificó ninguna lógica productiva ni la configuración de los servicios: **basta con borrar las carpetas `sonar-demo/`**.
