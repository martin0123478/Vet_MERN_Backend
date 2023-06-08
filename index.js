import express from "express";
import conctarDB from "./config/db.js";
import dotenv from "dotenv";
import veterinarioRoutes from "./routes/veterinarioRoutes.js";
const app = express();
dotenv.config();
conctarDB();
app.use("/api/veterniarios", veterinarioRoutes);

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${PORT} `);
});
