import TarjetaComponente from '../components/catalogo/TarjetaComponente';
import ResumenBuild from '../components/armador/ResumenBuild';
import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;


export default function ArmadorView({ componentes, build, alSeleccionar, alVerCompatibilidad }) {
  const tipos = ['CPU', 'GPU', 'Placa', 'RAM', 'Fuente'];

  return (
    <div className="container py-4">
      <h2 className="text-light mb-4"><i className="bi bi-tools me-2"></i>Armador de Build Gamer</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          {tipos.map((tipo) => (
            <div key={tipo} className="mb-4">
              <h4 className="text-success border-bottom border-secondary pb-2">{tipo}</h4>
              <div className="row row-cols-1 row-cols-md-2 g-3">
                {componentes.filter(c => c.tipo === tipo).map(comp => (
                  <div key={comp.id} className="col">
                    <TarjetaComponente 
                      componente={comp} 
                      alSeleccionar={(c) => alSeleccionar(tipo, c)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-4">
          <div className="sticky-top" style={{ top: '90px' }}>
            <ResumenBuild build={build} alVerCompatibilidad={alVerCompatibilidad} />
          </div>
        </div>
      </div>
    </div>
  );
}