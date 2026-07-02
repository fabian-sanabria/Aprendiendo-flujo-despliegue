# ======================================================
# SONAR TEST FILE - GENERATED ONLY FOR SONARQUBE TESTING - REMOVE AFTER VALIDATION
# ======================================================
# Regla Sonar esperada: reglas Docker (S6596 latest, S6471 root, etc.)

# S6596: usar tag 'latest' es inseguro y no reproducible
FROM node:latest

# S6471: ejecutar como root es inseguro
USER root

WORKDIR /app
COPY . /app

# Permisos 777 excesivos sobre archivos sensibles -> regla Docker de permisos inseguros
RUN chmod 777 /app && chmod 777 /etc/passwd

# Exponer el puerto SSH (22) en un contenedor de aplicación es inseguro
EXPOSE 22

# S6437: secreto embebido en variable de entorno de la imagen
ENV SECRET_KEY=payments-env-s3cr3t-Fict1ci0us-0003
# S6437: clave de API de pagos embebida en variable de entorno
ENV STRIPE_API_KEY=sk_live_Fict1ci0usPaym3ntsEnvKey0003

CMD ["node", "dist/main.js"]
