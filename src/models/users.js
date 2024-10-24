import { Schema, model, models } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'el correo es requerido'],
    unique: true,
    trim: true,
  },
  passwords: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    trim: true,
  },
  typeuser: {
    type: String,
    required: [true, 'El rol de usuario es requerido'],
    trim: true,
  }
}, {
  timestamps: true,
})

export default models.Users || model('Users', usersSchema );