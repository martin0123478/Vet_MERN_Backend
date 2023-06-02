import express from "express";
import conctarDB from "./config/db.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
conctarDB();
app.use("/", (req, res) => {
  res.send("hola mundo");
});

const PORT = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${PORT} `);
});
