const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definición del esquema y asignación a la variable 'ClientsSchema'
const ClientsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  surname: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true
  },
});

// Creación del modelo basado en el esquema y exportación del mismo
module.exports = mongoose.model("Clients", ClientsSchema, "clients");
