import { calcularConsumoTotal } from '../../utils/reglasCompatibilidad';
import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export default function IndicadorConsumo({ build }) {
  const consumo = calcularConsumoTotal(build.CPU, build.GPU);
  const potenciaFuente = build.Fuente ? build.Fuente.potenciaWatts : 0;
  const esSeguro = potenciaFuente >= consumo * 1.20;

  return (
    <div className="card card-custom p-3 mb-3">
      <h6 className="mb-2">Análisis Energético Instantáneo</h6>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span>Consumo Estimado:</span>
        <strong className="text-warning">{consumo} W</strong>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span>Potencia de Fuente:</span>
        <strong className="text-light">{potenciaFuente} W</strong>
      </div>
      {potenciaFuente > 0 && (
        <small className={esSeguro ? 'text-success' : 'text-error'}>
          {esSeguro ? '✔ Margen de seguridad óptimo (>=20%)' : '⚠ Advertencia: Fuente justa o insuficiente'}
        </small>
      )}
    </div>
  );
}