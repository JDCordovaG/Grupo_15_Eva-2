import { 
  calcularConsumoTotal, 
  validarSocket, 
  validarTipoMemoria, 
  validarCapacidadMemoria, 
  fuenteEsSuficiente 
} from '../utils/reglasCompatibilidad';
import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;


export default function ResultadoView({ build, alIrACotizar}) {
  const consumoTotal = calcularConsumoTotal(build.CPU, build.GPU);
  
  const reglas = [
    { nombre: 'Coincidencia de Socket (CPU y Placa)', valida: validarSocket(build.CPU, build.Placa), detalle: `CPU Socket: ${build.CPU?.socket} / Placa Socket: ${build.Placa?.socket}` },
    { nombre: 'Soporte Tipo de Memoria RAM', valida: validarTipoMemoria(build.RAM, build.Placa), detalle: `RAM: ${build.RAM?.tipoMemoria} / Placa: ${build.Placa?.tipoMemoria}` },
    { nombre: 'Capacidad Máxima de RAM', valida: validarCapacidadMemoria(build.RAM, build.Placa), detalle: `RAM: ${build.RAM?.capacidadGB}GB / Máx Placa: ${build.Placa?.maxRAM}GB` },
    { nombre: 'Capacidad de Fuente de Poder (Margen >= 20%)', valida: fuenteEsSuficiente(build.Fuente, consumoTotal), detalle: `Consumo: ${consumoTotal}W / PSU: ${build.Fuente?.potenciaWatts}W` }
  ];

  const esCompatible = reglas.every(r => r.valida);

  return (
    <div className="container py-5">
      <div className="card card-custom p-4 max-width-800 mx-auto">
        <h2 className="text-center mb-4">Resultado de Compatibilidad</h2>
        <div className={`alert ${esCompatible ? 'alert-success' : 'alert-danger'} text-center fs-4 fw-bold`}>
          <i className={`bi ${esCompatible ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-2`}></i>
          {esCompatible ? '¡Configuración Compatible!' : 'Incompatibilidad Detectada en la Configuración'}
        </div>

        <h5 className="mt-4 border-bottom border-secondary pb-2">Evaluación de Reglas Técnicas</h5>
        <ul className="list-group mb-4">
          {reglas.map((r, i) => (
            <li key={i} className="list-group-item bg-transparent text-light border-secondary d-flex justify-content-between align-items-center">
              <div>
                <strong>{r.nombre}</strong>
                <p className="small mb-0">{r.detalle}</p>
              </div>
              <span className={`badge ${r.valida ? 'bg-success' : 'bg-danger'}`}>
                {r.valida ? 'Pasó' : 'Fallo'}
              </span>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary-custom btn-lg w-100" disabled={!esCompatible} onClick={alIrACotizar}>
          Proceder a Cotizació</button>
      </div>
    </div>
  );
}