// Importaciones de dependencias necesarias.
import express from "express";
import dotenv from 'dotenv';

// Importación de archivos necesarios.
import router from "./routes/index.router.js";
import config from './config/db.config.js';

// Generando el servidor.
const app = express();
const port = process.env.PORT || 3000

// Configuracion de las variables de entorno.
dotenv.config();

// Middleware para procesar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Llamando a las rutas.
app.use("/", router);

// Iniciando el servidor.
app.listen(port, ( req, res ) => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});