import mongoose from "mongoose";
import dotenv from "dotenv";

// Configuración de las variables de entorno.
dotenv.config();

// Datos para la conexión con la base de datos
const userName = process.env.USER_NAME;
const clave = process.env.CLAVE;
const nameDB = process.env.NAME_DB;

// Verificar si las variables de entorno están definidas
if (!userName || !clave || !nameDB) {
  console.error("Faltan variables de entorno requeridas para la conexión a MongoDB.");
  process.exit(1);
}

// Forzar el uso de minúsculas para el nombre de la base de datos
const sanitizedNameDB = nameDB.toLowerCase();

// URI de conexión
const uri = `mongodb+srv://${userName}:${clave}@mg-lo-quiero-3d-databas.ph2h9f6.mongodb.net/${sanitizedNameDB}?retryWrites=true&w=majority`;

// Conexión a la base de datos
mongoose
  .connect(uri)
  .then(() => console.log(`¡Conexión exitosa a la base de datos ${sanitizedNameDB}!`))
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  });

// Link de conexion a MongoDB Compass. 
process.env.MONGO_DB_COMPASS

export default { userName, clave, sanitizedNameDB };