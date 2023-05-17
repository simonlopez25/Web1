import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistroVentas from './Componentes/RegistroVentas';
import Lista from './Componentes/Lista';
import Productos from './Componentes/Productos';
import ListaProveedores from './Componentes/ListaProveedores';
import GeneracionFac from './Componentes/GeneracionFac';
import ProductoStock from './Componentes/ProductoStock';
import InformeIngresos from './Componentes/InformeIngresos';
import LoginForm from './Componentes/LoginForm';
import Menu from './Componentes/Menu';
import './Componentes/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Menu />
        <div className="container-fluid bg-image">
          <div className="row">
            <div className="col-12">
              <Routes>
                <Route path="/registroventas" element={<RegistroVentas />} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/listaproveedores" element={<ListaProveedores />} />
                <Route path="/generacionfac" element={<GeneracionFac />} />
                <Route path="/productostock" element={<ProductoStock />} />
                <Route path="/informeingresos" element={<InformeIngresos />} />
                <Route exact path="/" element={<LoginForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
