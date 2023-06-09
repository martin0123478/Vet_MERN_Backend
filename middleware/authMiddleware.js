import jwt from "jsonwebtoken";
import Veterinario from "../models/Veteriniario.js";
const chekauth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.veterinario = await Veterinario.findById(decoded.id).select(
        "-password -token -confirmado"
      );
      return next();
    } catch (error) {
      const errors = new Error("Token no valido");
      res.status(403).json({ msg: errors.message });
    }
  }
  if (!token) {
    const error = new Error("Token no valido o inexistente");
    res.status(403).json({ msg: error.message });
  }
  next();
};
export default chekauth;
