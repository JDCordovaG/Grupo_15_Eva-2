export default function TarjetaComponente({ componente, alSeleccionar, deshabilitado = false }) {
  return (
    <div className="card card-custom h-100 shadow-sm">
      <img src={componente.imagen} className="card-img-top p-3" alt={componente.modelo} style={{ height: '180px', objectFit: 'contain' }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <span className="badge bg-secondary mb-2">{componente.tipo} - {componente.marca}</span>
          <h5 className="card-title text-light">{componente.modelo}</h5>
          {componente.socket && <p className="small mb-1">Socket: {componente.socket}</p>}
          {componente.tdp > 0 && <p className="small mb-1">TDP: {componente.tdp}W</p>}
        </div>
        <div className="mt-3">
          <h4 className="text-success mb-3">${componente.precio.toLocaleString('es-CL')}</h4>
          <button 
            className="btn btn-primary-custom w-100" 
            onClick={() => alSeleccionar(componente)}
            disabled={deshabilitado}
          >
            {deshabilitado ? 'Incompatible / Desactivado' : 'Agregar a la Build'}
          </button>
        </div>
      </div>
    </div>
  );
}