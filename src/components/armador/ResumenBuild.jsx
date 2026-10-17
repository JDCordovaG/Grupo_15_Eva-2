import React from 'react';
import { calcularConsumoTotal, calcularSubtotal } from '../../utils/reglasCompatibilidad';

export default function ResumenBuild({ build, alVerCompatibilidad }) {
  const consumoTotal = calcularConsumoTotal(build.CPU, build.GPU);
  const total = calcularSubtotal(build);
  const estaCompleto = Boolean(build.CPU && build.GPU && build.Placa && build.RAM && build.Fuente);

  return (
    <div className="card card-custom p-3">
      <h4 className="text-light border-bottom pb-2">Resumen de Build</h4>
      <ul className="list-group list-group-flush mb-3">
        {Object.entries(build).map(([tipo, comp]) => (
          <li key={tipo} className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center border-secondary px-0">
            <div>
              <strong>{tipo}:</strong> {comp ? comp.modelo : <span className="">No seleccionado</span>}
            </div>
            <span>{comp ? `$${comp.precio.toLocaleString('es-CL')}` : '-'}</span>
          </li>
        ))}
      </ul>
      <div className="mb-2">
        <small className="">Consumo estimado acumulado:</small>
        <h5><i className="bi bi-lightning-charge-fill text-warning me-1"></i>{consumoTotal} Watts</h5>
      </div>
      <div className="mb-3">
        <small className="">Precio Parcial Total:</small>
        <h3 className="text-success">${total.toLocaleString('es-CL')}</h3>
      </div>
      <button 
        className="btn btn-primary-custom w-100 py-2" 
        disabled={!estaCompleto}
        onClick={alVerCompatibilidad}
      >
        Validar Compatibilidad
      </button>
      {!estaCompleto && <small className="text-error d-block mt-2">Selecciona todos los componentes para validar.</small>}
    </div>
  );
}