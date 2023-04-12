
FROM node:19.2-alpine3.16
# Esta imagen ya cuenta con la carpeta /app

# cd app
WORKDIR /app

# Destino /app
COPY . .
# Instalar las dependencias
RUN npm install

# Realizar Testing
RUN npm run test

# Eliminar archivos no necesarios en producción
RUN rm -rf tests && rm -rf node_modules

# Instalar módulos de node unicamente de producción
RUN npm install --prod

# Comando run de la aplicacióm
CMD ["npm","start"] 