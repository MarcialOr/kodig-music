import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const Formulario: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register('email', { required: 'El correo es obligatorio', pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
