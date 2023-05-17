import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SaleForm = () => {
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
    <div className="container bg-primary">
      <h2>Formulario de registro de ventas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cliente:</label>
          <input type="text" name="customer" value={sale.customer} onChange={handleInputChange} />
        </div>
        <div>
          <label>Cantidad:</label>
          <input type="number" name="quantity" value={sale.quantity} onChange={handleInputChange} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="price" value={sale.price} onChange={handleInputChange} />
        </div>
        <div>
          <label>Fecha de venta:</label>
          <input type="date" name="date" value={sale.date} onChange={handleInputChange} />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default SaleForm;
