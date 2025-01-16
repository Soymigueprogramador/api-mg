import express from "express";
import { 
    inicio, 
    clientsControllers, 
    paginaClientes, 
} from "../controllers/clients.controller.js";

const router = express.Router();

// Ruta de inicio
router.get("/", inicio);

// Ruta para crear clientes
router.post("/clients", clientsControllers);
router.get("/clients", paginaClientes);

export default router;