import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Desde api/veterinario");
});

router.get("/login", (req, res) => {
  res.send("desde api/veterinarios/login");
});
export default router;
