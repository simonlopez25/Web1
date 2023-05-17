import React, { useState } from 'react';
export const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para autenticar las credenciales de inicio de sesión
    console.log('Credenciales de inicio de sesión:', credentials);
    setCredentials({
      username: '',
      password: ''
    });
  }

  return (
    <div className="container">
      <h2>Formulario de inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" value={credentials.username} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginForm;