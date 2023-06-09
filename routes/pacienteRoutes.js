import express from "express";
import {
  agregarPaciente,
  obtenerPacientes,
} from "../controllers/pacienteController.js";
import chekauth from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(chekauth, agregarPaciente).get(obtenerPacientes);
export default router;
