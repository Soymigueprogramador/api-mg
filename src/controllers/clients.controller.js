import Client from "../models/clients.model.js";

// Controlador de inicio
const inicio = (req, res) => {
  res.send("Bienvenidos");
};
 
const paginaClientes = ( req, res ) => {
  res.send('pagina de clientes')
};

// Controlador para manejar clientes
const clientsControllers = async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, direccion } = req.body;

    // Validación de campos obligatorios
    if (!nombre || !apellido || !correo || !telefono || !direccion) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Crear y guardar el cliente en la base de datos
    const newClient = new Client({ nombre, apellido, correo, telefono, direccion });
    const savedClient = await newClient.save();

    res.status(201).json({
      message: "Cliente guardado exitosamente",
      data: savedClient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error al guardar el cliente",
      error: error.message,
    });
  }
};

export { 
  inicio, 
  clientsControllers, 
  paginaClientes 
};
