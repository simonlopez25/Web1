import React, { useState } from 'react';

const RegistroProveedores = () => {
  const [supplier, setSupplier] = useState({
    name: '',
    contact: '',
    products: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSupplier({ ...supplier, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para guardar el proveedor en el sistema
    console.log('Proveedor registrado:', supplier);
    setSupplier({
      name: '',
      contact: '',
      products: ''
    });
  }

  return (
    <div>
      <h2>Formulario de registro de proveedores</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input className="form-control" type="text" id="name" name="name" value={supplier.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contacto:</label>
          <input className="form-control" type="text" id="contact" name="contact" value={supplier.contact} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="products">Productos suministrados:</label>
          <input className="form-control" type="text" id="products" name="products" value={supplier.products} onChange={handleInputChange} />
        </div>
        <button className="btn btn-primary" type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroProveedores;
