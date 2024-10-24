import { Schema, model, models } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo es requerido'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La descripcion es requerida'],
    unique: true,
    trim: true,
  },
  info: {
    type: String,
    required: [true, 'La informacion es requerida'],
    unique: true,
    trim: true,
  },
  step: {
    type: String,
    required: [true, 'El paso a paso es requerido'],
    unique: true,
    trim: true,
  },
  price: {
    type: String,
    required: [true, 'El precio es requerido'],
    trim: true,
  },
  img: {
    type: String,
    required: [true, 'La imagen es requerida'],
    trim: true,
  },
  teacherid:{
    type: String,
    required: [true, 'el id del profesor es requerida'],
    trim: true,
  }
}, {
  timestamps: true,
})

export default models.Courses || model('Courses', courseSchema );