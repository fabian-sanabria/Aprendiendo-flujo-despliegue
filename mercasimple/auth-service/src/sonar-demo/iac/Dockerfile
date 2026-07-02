# ======================================================
# SONAR TEST FILE - GENERATED ONLY FOR SONARQUBE TESTING - REMOVE AFTER VALIDATION
# ======================================================
# Regla Sonar esperada: S6596 (imagen con tag inestable), S6471 (contenedor como root), secretos en ENV
# Qué debe detectar SonarCloud: uso de tag 'latest', ejecución como root, permisos 777,
#   puerto SSH expuesto y un secreto embebido en una variable de entorno.

# Noncompliant S6596: usar el tag 'latest' hace que el build no sea reproducible
FROM node:latest

# Noncompliant S6471: fijar explícitamente el usuario root / correr como root
USER root

WORKDIR /app

COPY . .

# Noncompliant: 'RUN chmod 777' otorga permisos de escritura a todos (world-writable)
RUN chmod 777 /app

# Noncompliant: secreto embebido en la imagen mediante ENV (queda en las capas de la imagen)
ENV API_KEY=sk_live_1234567890abcdefADMINSECRET

# Noncompliant: exponer el puerto 22 (SSH) en un contenedor es un riesgo de seguridad
EXPOSE 22

CMD ["node", "index.js"]
