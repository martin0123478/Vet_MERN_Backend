import Veterinario from "../models/Veteriniario.js";

const registrar = async (req, res) => {
  const { email } = req.body;
  //revisar si usarios duplicados
  const existeUsuario = await Veterinario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }
  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};
const perfil = (req, res) => {
  res.json({ msg: "mostrando perfil" });
};

const confirmar = async (req, res) => {
  const { token } = req.params;
  const usuarioConfirmar = await Veterinario.findOne({ token });
  try {
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
export { registrar, perfil, confirmar };
