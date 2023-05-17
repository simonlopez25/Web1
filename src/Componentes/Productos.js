import React, { useState } from 'react';

const Productos = () => {
  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    location: '',
    acquisitionDate: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para guardar el producto en el sistema
    console.log('Producto registrado:', product);
    setProduct({
      name: '',
      quantity: 0,
      location: '',
      acquisitionDate: ''
    });
  }

  return (
    <div className="container">
      <h2>Formulario de registro de productos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Cantidad:</label>
          <input type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Ubicación:</label>
          <input type="text" id="location" name="location" value={product.location} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="acquisitionDate">Fecha de adquisición:</label>
          <input type="date" id="acquisitionDate" name="acquisitionDate" value={product.acquisitionDate} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default Productos;
