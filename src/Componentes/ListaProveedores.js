import React from 'react';

export const ListaProveedores = () => {
  const suppliers = [
    { id: 1, name: 'Proveedor 1', contact: 'Contacto 1', products: ['Producto 1' ] },
    { id: 2, name: 'Proveedor 2', contact: 'Contacto 2', products: ['Producto 3'] },
    { id: 3, name: 'Proveedor 3', contact: 'Contacto 3', products: ['Producto 5'] }
  ];

  return (
    <div className="container">
      <h2>Lista de proveedores</h2>
      <table className="table table-striped table-bordered table-dark">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Productos suministrados</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>{supplier.products.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProveedores;
