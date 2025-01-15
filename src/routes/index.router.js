// Importaciones de dependencias necesarias.
import express from "express";

// Generando las rutas.
const router = express.Router();

// Rutas básicas.
router.get("/", (req, res) => {
  res.send("Bienvenido a la API MG lo quiero 3D");
});

router.get("/nosotros", (req, res) => {
  res.send("Página de Nosotros");
});

export default router;