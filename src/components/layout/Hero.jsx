import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export default function Hero({ alIrAlArmador }) {
  return (
    <div className="card card-custom p-4 h-100 text-center shadow">
      <h1 className="display-4 fw-bold text-success mb-3">Arma tu PC Gamer Ideal</h1>
      <p className="mb-4">
        Selecciona componentes compatibles, calcula tu consumo energético en tiempo real y obtén tu cotización oficial.
      </p>
      <button className="btn btn-primary-custom btn-lg px-5 py-3" onClick={alIrAlArmador}>
        Comenzar a Armar Ahora <i className="bi-arrow-right"></i>
      </button>
    </div>
  );
}