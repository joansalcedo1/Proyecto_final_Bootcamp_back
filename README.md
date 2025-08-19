# ⚙ Backend - Reporte de Huecos en Cali

Este repositorio contiene el **backend** de la aplicación web para reportar y buscar huecos en la ciudad de Cali.  
Fue desarrollado en **Node.js** con **Express**, utilizando **MongoDB** como base de datos y **Mongoose** como middleware.

El backend expone una API REST que permite **crear, consultar y filtrar** reportes de huecos, los cuales son consumidos por el frontend.

## Nota:
Para que este back funcion es necesario que se clone el repositorio del front:
```bash
https://github.com/joansalcedo1/Proyecto_final_Bootcamp_front
```
---

## 📦 Funcionalidades
- **Crear reportes**: Guardar categoría, dirección y comentarios de un hueco.
- **Listar reportes**: Obtener todos los reportes guardados.
- **Filtrar reportes**: Buscar huecos por calle o carrera.
- **Detalles de reporte**: Consultar información más específica de un hueco.

---

## 🚀 Tecnologías utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv (manejo de variables de entorno)
- Cors (para permitir peticiones desde el frontend)

---

## 🛠 Cómo ejecutar el backend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/back-huecos.git
   cd back-huecos
Instalar dependencias:

```bash
npm install
```
2. Crear un archivo .env en la raíz del proyecto con la configuración necesaria:

```env
PORT=3005
MONGO_URI=tu_url_de_mongo
```
3. Iniciar el servidor:

```bash

npm start
```
El backend estará disponible en:

```bash

http://localhost:3005
```

## 📌 Endpoints principales
```bash
GET /api/huecos → Obtiene todos los huecos.

POST /api/huecos → Crea un nuevo reporte de hueco.

GET /api/huecos/:id → Obtiene los detalles de un hueco específico.

GET /api/huecos/search/:direccion → Busca huecos por calle o carrera.
```

## 🎯 Objetivo
Conectar el frontend con la base de datos.

Proveer una API REST para manejar los reportes de huecos en la ciudad de Cali.
