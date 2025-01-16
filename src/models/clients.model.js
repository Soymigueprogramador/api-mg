import mongoose from "mongoose";

// Creando el esquema de los clientes
const clientSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, "El nombre es obligatorio"],
    lowercase: true,
  },
  apellido: {
    type: String,
    trim: true,
    required: [true, "El apellido es obligatorio"],
    lowercase: true,
  },
  correo: {
    type: String,
    trim: true,
    required: [true, "El correo es obligatorio"],
    lowercase: true,
    unique: true,
  },
  telefono: {
    type: String,
    trim: true,
    required: [true, "El teléfono es obligatorio"],
    unique: true,
  },
  direccion: {
    type: String,
    trim: true,
    required: [true, "La dirección es obligatoria"],
  },
});

// Creando el modelo a partir del esquema
const Client = mongoose.model("Client", clientSchema);

export default Client;
