import React, { useState } from 'react';

export const RegistroVentas = () => {
  const [sale, setSale] = useState({
    customer: '',
    quantity: 0,
    price: 0,
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSale({ ...sale, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para guardar la venta en el sistema
    console.log('Venta registrada:', sale);
    setSale({
      customer: '',
      quantity: 0,
      price: 0,
      date: ''
    });
  }

  return (
    <div className="container">
      <h2>Formulario de registro de ventas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customer">Cliente:</label>
          <input type="text" id="customer" name="customer" value={sale.customer} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Cantidad:</label>
          <input type="number" id="quantity" name="quantity" value={sale.quantity} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" value={sale.price} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha de venta:</label>
          <input type="date" id="date" name="date" value={sale.date} onChange={handleInputChange} className="form-control" />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroVentas;
