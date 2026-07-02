# ======================================================
# SONAR TEST FILE - GENERATED ONLY FOR SONARQUBE TESTING - REMOVE AFTER VALIDATION
# ======================================================
# Regla Sonar esperada: secretos embebidos en ENV/ARG, copia de archivos sensibles a la imagen
# Qué debe detectar SonarCloud: credenciales embebidas en variables de build (ARG) y de entorno (ENV),
#   y la copia de material sensible (claves privadas, .env) dentro de la imagen.

FROM node:18-alpine

WORKDIR /srv

# Noncompliant: credencial embebida en un ARG (visible en el historial de build)
ARG DB_PASSWORD=SuperSecretDbPass123

# Noncompliant: token/credencial embebida en ENV (persiste en las capas de la imagen)
ENV AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMIabcdEXAMPLEKEY
ENV JWT_SECRET=hardcoded-jwt-signing-secret-value

# Noncompliant: copiar una clave privada SSH dentro de la imagen
COPY id_rsa /root/.ssh/id_rsa

# Noncompliant: copiar el archivo .env con secretos dentro de la imagen
COPY .env /srv/.env

CMD ["node", "server.js"]
