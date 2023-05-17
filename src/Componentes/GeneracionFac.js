import React, { useState } from 'react';

const GeneracionFac = () => {
  const [invoice, setInvoice] = useState({
    customer: '',
    quantity: 0,
    price: 0,
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInvoice({ ...invoice, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para generar la factura
    console.log('Factura generada:', invoice);
    setInvoice({
      customer: '',
      quantity: 0,
      price: 0,
      date: ''
    });
  }

  return (
    <div className="container">
      <h2>Formulario de generación de facturas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customer">Cliente:</label>
          <input type="text" id="customer" name="customer" value={invoice.customer} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Cantidad:</label>
          <input type="number" id="quantity" name="quantity" value={invoice.quantity} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" value={invoice.price} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha de venta:</label>
          <input type="date" id="date" name="date" value={invoice.date} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Generar factura</button>
      </form>
    </div>
  );
}

export default GeneracionFac;

