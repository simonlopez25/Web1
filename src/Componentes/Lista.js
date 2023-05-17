import React from 'react';
import './App.css';

const Lista = () => {
  const products = [
    { id: 1, name: 'Cebolla', quantity: 10, location: 'Ubicación 1', acquisitionDate: '2023-05-01' },
    { id: 2, name: 'Caballos', quantity: 5, location: 'Ubicación 2', acquisitionDate: '2023-05-02' },
    { id: 3, name: 'Guineo', quantity: 3, location: 'Ubicación 3', acquisitionDate: '2023-05-03' }
  ];

  return (
    <div className="container">
      <h2>Lista de productos</h2>
      <table className="table table-striped table-bordered table-dark">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Ubicación</th>
            <th>Fecha de adquisición</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.location}</td>
              <td>{product.acquisitionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lista;
