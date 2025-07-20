# Guia de instalación del repositorio

## 0. Dependencias

 - Node.js: v22.14.0
 - Docker: version 28.0.4, build b8034c0

## 1. Clonar el repositorio

     git clone git@github.com:carlosmoran97/startup-test.git
 
## 2. Crear los archivos de entorno
El repositorio tiene dos carpetas, una para el backend y otra para el front-end.
En la carpeta del backend crear un archivo **.env** con los siguientes valores

backend/.env

    DB_HOST=localhost
    DB_PORT=5433
    DB_USERNAME=postgres
    DB_PASSWORD=postgres
    DB_DATABASE=startup

En el front-end crear un archivo **.env.local** con los siguientes valores

front-end/.env.local

    NEXT_PUBLIC_API_URL=http://localhost:3000

## 3. Levantar el servicio de la base de datos con docker
Ubicarse en la raíz del proyecto y ejecutar el compando

    docker-compose up -d

## 4. Iniciar el backend
En una terminal primero hay que ubicarse en la carpeta del backend y correr el comando

    npm install
Luego hay que ejecutar las migraciones

    npm run migrate
Y por último iniciar el servicio con

    npm run start
El servicio debería de estar disponible en http://localhost:3000

5. Iniciar el front-end
En una terminal ubicarse en la carpeta front-end y ejecutar

    npm install

Para iniciar el servidor ejecutar

    npm run dev

El servicio debería de estar disponible en http://localhost:4000

## Test unitarios (backend)

Para ejecutar los tests unitarios ubicarse en la carpeta backend y ejecutar el comando

    npm run test

<img width="565" height="305" alt="image" src="https://github.com/user-attachments/assets/2ac0f321-69bc-4993-957e-f2e3bcc4eef7" />

## Documentación de Swagger

Entrar a http://localhost:3000/api

<img width="1728" height="962" alt="image" src="https://github.com/user-attachments/assets/2496c349-b1c7-4a10-8720-b950810c7494" />


## Demo
https://www.youtube.com/watch?v=7sdBMUafY8E
