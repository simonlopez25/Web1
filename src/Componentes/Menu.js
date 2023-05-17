import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ color: 'white' }}>Inicio de seccion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RegistroVentas" style={{ color: 'white' }}>Registro de ventas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Lista" style={{ color: 'white' }}>Lista</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Productos" style={{ color: 'white' }}>Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ListaProveedores" style={{ color: 'white' }}>Lista de proveedores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/GeneracionFac" style={{ color: 'white' }}>Generacion de factura</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ProductoStock" style={{ color: 'white' }}>Productos Stock</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/InformeIngresos" style={{ color: 'white' }}>Informe de Ingresos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
