import { useState } from 'react';
import FiltroCatalogo from '../components/catalogo/FiltroCatalogo';
import TarjetaComponente from '../components/catalogo/TarjetaComponente';

export default function CatalogoView({ componentes, alSeleccionarComponente, alVerDetalle }) {
  const [filtroTipo, setFiltroTipo] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const componentesFiltrados = componentes.filter(comp => {
    const coincideTipo = filtroTipo === '' || comp.tipo === filtroTipo;
    const coincideBusqueda = comp.modelo.toLowerCase().includes(busqueda.toLowerCase().trim()) || 
                             comp.marca.toLowerCase().includes(busqueda.toLowerCase().trim());
    return coincideTipo && coincideBusqueda;
  });

  return (
    <div className="container py-4">
      <h2 className="text-light mb-4"><i className="bi bi-grid me-2"></i>Catálogo General de Componentes</h2>
      <FiltroCatalogo 
        filtroTipo={filtroTipo} 
        setFiltroTipo={setFiltroTipo} 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {componentesFiltrados.map(comp => (
          <div key={comp.id} className="col">
            <div onClick={() => alVerDetalle(comp)} style={{ cursor: 'pointer' }}>
              <TarjetaComponente componente={comp} alSeleccionar={() => alSeleccionarComponente(comp)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}