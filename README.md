# Melp API

This is a REST API that provides restaurant information and CRUD operations, as well as location-based statistical calculations. It uses Node.js, Express, PostgreSQL and PostGIS.

## Requirements

- Node.js
- PostgreSQL
- PostGIS (PostgreSQL extension)

## Installation

1. Clone the repository
2. Install the dependencies with `npm install`.
3. Configure the necessary environment variables
4. Start the server with `npm run dev`.

## Environment variables

You must set the following environment variables:

- `DB_HOST`: The host of your PostgreSQL instance.
- `DB_PORT`: The port of your PostgreSQL instance.
- `DB_USER`: The user of your PostgreSQL instance.
- `DB_PASSWORD`: The password of your PostgreSQL instance.
- `DB_NAME`: The name of your PostgreSQL database.

## Usage

- `GET /api/restaurants`: Get all restaurants.
- `GET /api/restaurants/:id`: Fetch a restaurant by ID
- `POST /api/restaurants`: Create a new restaurant
- PUT /api/api/restaurants/:id`: Update a restaurant
- DELETE /api/restaurants/:id`: Delete a restaurant
- `GET /api/restaurants/statistics?latitude=x&longitude=y&radius=z`: Get restaurant statistics inside a circle

## Deployment in Railway

1. Create an account on [Railway](https://railway.app/) and log in to the control panel.
2. Create a new project and select "Deploy from GitHub repo".
3. Authorize Railway to access your GitHub repository and select this repository.
4. Railway will automatically detect that this is a Node.js application and set up the runtime environment.
5. In the "Environment variables" section, add the necessary environment variables (see "Environment variables" section).
6. Click "Deploy" to start deploying your application.
7. Once the deployment is complete, Railway will provide you with a public URL where you can access your application.

## Additional notes

- Make sure you have the PostGIS extension enabled on your PostgreSQL instance in Railway.
- Use a tool such as Postman to test the API endpoints.


# Melp API

Esta es una API REST que proporciona información sobre restaurantes y operaciones CRUD, además de cálculos estadísticos basados en la ubicación. Utiliza Node.js, Express, PostgreSQL y PostGIS.

## Requisitos

- Node.js
- PostgreSQL
- PostGIS (extensión de PostgreSQL)

## Instalación

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Configura las variables de entorno necesarias
4. Inicia el servidor con `npm run dev`

## Variables de entorno

Debes configurar las siguientes variables de entorno:

- `DB_HOST`: El host de tu instancia de PostgreSQL.
- `DB_PORT`: El puerto de tu instancia de PostgreSQL.
- `DB_USER`: El usuario de tu instancia de PostgreSQL.
- `DB_PASSWORD`: La contraseña de tu instancia de PostgreSQL.
- `DB_NAME`: El nombre de tu base de datos PostgreSQL.

## Uso

- `GET /api/restaurants`: Obtener todos los restaurantes
- `GET /api/restaurants/:id`: Obtener un restaurante por ID
- `POST /api/restaurants`: Crear un nuevo restaurante
- `PUT /api/restaurants/:id`: Actualizar un restaurante
- `DELETE /api/restaurants/:id`: Eliminar un restaurante
- `GET /api/restaurants/statistics?latitude=x&longitude=y&radius=z`: Obtener estadísticas de restaurantes dentro de un círculo

## Despliegue en Railway

1. Crea una cuenta en [Railway](https://railway.app/) y accede al panel de control.
2. Crea un nuevo proyecto y selecciona "Deploy from GitHub repo".
3. Autoriza a Railway para acceder a tu repositorio de GitHub y selecciona este repositorio.
4. Railway detectará automáticamente que se trata de una aplicación Node.js y configurará el entorno de ejecución.
5. En la sección "Variables de entorno", agrega las variables de entorno necesarias (ver sección "Variables de entorno").
6. Haz clic en "Deploy" para iniciar el despliegue de tu aplicación.
7. Una vez que el despliegue haya finalizado, Railway te proporcionará una URL pública donde podrás acceder a tu aplicación.

## Notas adicionales

- Asegúrate de tener la extensión PostGIS habilitada en tu instancia de PostgreSQL en Railway
- Utiliza una herramienta como Postman para probar los endpoints de la API.