import express from "express";
import conctarDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
conctarDB();
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${PORT} `);
});
