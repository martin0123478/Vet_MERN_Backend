const registrar = (req, res) => {
  res.send("Desde api/veterinario");
};
const perfil = (req, res) => {
  res.send("desde api/veterinarios/perfil");
};
export { registrar, perfil };
