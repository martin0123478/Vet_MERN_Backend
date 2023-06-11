import express from "express";
import {
  agregarPaciente,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminaPaciente,
} from "../controllers/pacienteController.js";
import chekauth from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(chekauth, agregarPaciente)
  .get(chekauth, obtenerPacientes);

router
  .route("/:id")
  .get(chekauth, obtenerPaciente)
  .put(chekauth, actualizarPaciente)
  .delete(chekauth, eliminaPaciente);
export default router;
