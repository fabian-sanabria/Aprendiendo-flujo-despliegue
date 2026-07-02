# ======================================================
# SONAR TEST FILE - GENERATED ONLY FOR SONARQUBE TESTING - REMOVE AFTER VALIDATION
# ======================================================
# Regla Sonar esperada: S6595 (ADD con URL remota), descarga+ejecución de scripts, ausencia de USER no-root
# Qué debe detectar SonarCloud: uso de ADD con una fuente remota, patrón inseguro 'curl | sh',
#   instalación de paquetes sin fijar versión y contenedor que corre como root por defecto.

FROM ubuntu:22.04

WORKDIR /opt

# Noncompliant S6595: 'ADD' con una URL remota; se debe preferir COPY + descarga verificada
ADD http://example.com/installer.tar.gz /opt/installer.tar.gz

# Noncompliant: descargar y ejecutar un script directamente (curl | sh) es inseguro
RUN curl -fsSL http://get.example.com/install.sh | sh

# Noncompliant: 'apt-get install' sin fijar (pin) la versión del paquete
RUN apt-get update && apt-get install -y nginx openssh-server

# Noncompliant S6471: no se define un USER no-root; el contenedor corre como root
# (ausencia intencional de la instrucción USER)

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
