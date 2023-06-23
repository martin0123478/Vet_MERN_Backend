import express from "express";
import cors from "cors";
import conctarDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
conctarDB();
const dominiosPerminitos = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPerminitos.indexOf(origin) !== -1) {
      //el origen esta permitido
      callback(null, true);
    } else {
      callback(new Error("no permitido por cors"));
    }
  },
};
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${PORT} `);
});
