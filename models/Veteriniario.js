import moongose from "moongose";

const veterinarioSchema = moongose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

const Veterinario = moongose.model("Veterinario", veterinarioSchema);
export default Veterinario;
