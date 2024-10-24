'use client';
import './register.css';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    passwords: '',
    typeuser: '',
  });

  const validateForm = () => {
    let valid = true;

    // Validación de nombre
    if (newUser.name.length < 4 || newUser.name.length > 20) {
      toast.error('El nombre debe tener entre 4 y 20 caracteres.');
      valid = false;
    }

    // Validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      toast.error('Debe ingresar un correo electrónico válido.');
      valid = false;
    }

    // Validación de contraseña
    if (newUser.passwords.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres.');
      valid = false;
    }

    // Validación de tipo de usuario
    if (newUser.typeuser === '') {
      toast.error('Debe seleccionar un tipo de usuario.');
      valid = false;
    }

    return valid;
  };

  const createUser = async () => {
    try {
      const res = await fetch('../api/Users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Error al crear el usuario.');
      }

      toast.success('Usuario creado con éxito.');
      return true; // Indica que la operación fue exitosa
    } catch (error) {
      toast.error(error.message + ' nombre del usuario o correo ya existe.');
      return false; // Indica que hubo un error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const success = await createUser();
      if (success) {
        window.location.href = '/login';
      }
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  return (
    <div className='modal-register'>
      <ToastContainer />
      <form className='form-modal-register' onSubmit={handleSubmit}>
        <div className='title-form-modal-register'>
          <label className='text-form-modal-register'>¡Registrate Ya!</label>
        </div>

        <div className='name-form-modal-register'>
          <input
            id='name'
            className='input-name-form-modal-register'
            name='Name'
            placeholder='Nombre de usuario'
            onChange={handleChange}
            required
          />
        </div>

        <div className='email-form-modal-register'>
          <input
            id='email'
            className='input-email-form-modal-register'
            name='Correo-electrónico'
            placeholder='Correo electrónico'
            onChange={handleChange}
            required
          />
        </div>

        <div className='password-form-modal-register'>
          <input
            id='passwords'
            className='input-password-form-modal-register'
            type='password'
            name='password-correo-electrónico'
            placeholder='Contraseña'
            onChange={handleChange}
            required
          />
        </div>

        <div className='role-form-modal-register'>
          <label htmlFor='role'>Tipo de usuario:</label>
          <select id='typeuser' name='tipo_usuario' onChange={handleChange} required>
            <option value=''>Seleccione un tipo</option>
            <option value='Usuario'>Usuario</option>
            <option value='Profesor'>Profesor</option>
          </select>
        </div>

        <div className='link-register-form-modal-register'>
          <Link href={'/login'} className='text-link-register-form-modal-register'>
            ¿Ya tienes cuenta?
          </Link>
        </div>

        <button className='btn-register-form-modal-register' type='submit'>
          Ingresar
        </button>
      </form>
    </div>
  );
}