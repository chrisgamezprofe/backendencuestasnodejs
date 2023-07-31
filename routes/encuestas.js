import express from 'express'
import { consultarEncuesta, crearEncuesta, editarEncuesta, eliminar, guardarVoto, listar } from '../controllers/encuestaController.js';


const router = express.Router();
//GUARDAR
router.post("/",crearEncuesta);
router.get("/",listar);
router.post("/edit",editarEncuesta);
router.post("/votar",guardarVoto);
router.get("/:id",consultarEncuesta);
router.delete("/",eliminar);

export default router;