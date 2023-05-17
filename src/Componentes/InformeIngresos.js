import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InformeIngresos = () => {
  const incomeReportData = [
    { month: 'Enero', amount: 6000 },
    { month: 'Febrero', amount: 10000 },
    { month: 'Marzo', amount: 3000 },
    // Agrega más datos según sea necesario
  ];

  const totalIncome = incomeReportData.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="display-4">Informe de ingresos generados</h2>
        <table className="table table-dark">
          <thead className="thead-dark">
            <tr>
              <th>Mes</th>
              <th>Ingresos</th>
            </tr>
          </thead>
          <tbody>
            {incomeReportData.map((item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>${item.amount}</td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${totalIncome}</strong></td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button className="btn btn-primary">Descargar Informe</button>
        </div>
      </div>
    </div>
  );
}

export default InformeIngresos;
