import mongoose from "mongoose";
import dotenv from 'dotenv';

// Configuracion de las variables de entorno.
dotenv.config();

// Datos para la conexión con la base de datos
const userName = process.env.USER_NAME;
const clave = process.env.CLAVE;
const nameDB = process.env.NAME_DB;

// URI de conexión
const uri = `mongodb+srv://${userName}:${clave}@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/${nameDB}?retryWrites=true&w=majority`;

// Conexión a la base de datos
mongoose.connect(uri)
    .then(() => console.log("¡Conexión exitosa a MG-lo-quiero-3D-dataBase!"))
    .catch((error) => console.error("Error al conectar a MongoDB:", error));

export default { userName, clave, nameDB };

// Enlace para MongoDB Compass
process.env.MONGO_DB_COMPASS 