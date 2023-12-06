'use strict';
// Cargamos el módulo de mongoose
import mongoose from 'mongoose';
// Usaremos los esquemas
const Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
const UserSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  department: String,
  city: String,
  phone: Number,
});
// Exportamos el modelo para usarlo en otros ficheros
export const User = mongoose.model('User', UserSchema);
