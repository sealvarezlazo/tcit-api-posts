# 🚀 Inicio del Proyecto - Desafío Base de Datos

## 📌 Requisitos Previos

Asegúrate de tener instalado en tu sistema:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/)

## 🛠 Pasos para Iniciar el Proyecto

### 1️⃣ Clonar y configurar la API

Clona el repositorio de la API y accede a su carpeta:

```bash
git clone https://github.com/sealvarezlazo/tcit-api-posts.git
cd tcit-api-posts
```

Luego, inicia la base de datos con Docker desde la raíz del proyecto:

```bash
docker-compose -f docker-composer.yml up -d
```

Finalmente, ejecuta la API en modo desarrollo:

```bash
npm install  # Instala las dependencias
npm run start:dev
```

### 2️⃣ Clonar y ejecutar el frontend

En otra terminal, clona el repositorio del frontend y accede a su carpeta:

```bash
git clone https://github.com/sealvarezlazo/tcit-front.git
cd tcit-front
```

Luego, instala las dependencias y ejecuta la aplicación:

```bash
npm install
npm run dev
```

✅ ¡Listo! La API y el frontend estarán corriendo y listos para su uso. 🚀
