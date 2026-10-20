export default function DetalleComponenteView({ componente, alVolver, alAgregar }) {
  if (!componente) {
    return (
      <div className="container py-5 text-center">
        <p className="">No se ha seleccionado ningún componente.</p>
        <button className="btn btn-secondary" onClick={alVolver}>Volver al Catálogo</button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button className="btn btn-outline-light mb-4" onClick={alVolver}><i className="bi bi-arrow-left me-2"></i>Volver</button>
      <div className="card card-custom p-4">
        <div className="row g-4">
          <div className="col-md-5 text-center">
            <img src={componente.imagen} alt={componente.modelo} className="img-fluid rounded" style={{ maxHeight: '300px' }} />
          </div>
          <div className="col-md-7">
            <span className="badge bg-success mb-2">{componente.tipo} - {componente.marca}</span>
            <h1 className="text-light">{componente.modelo}</h1>
            <h3 className="text-success my-3">${componente.precio.toLocaleString('es-CL')}</h3>
            <p className="">Especificaciones técnicas completas validadas por el sistema de compatibilidad de BuildMyPC.</p>
            <ul className="list-group list-group-flush mb-4 bg-transparent">
              {componente.socket && <li className="list-group-item bg-transparent text-light border-secondary"><strong>Socket:</strong> {componente.socket}</li>}
              {componente.tdp !== undefined && <li className="list-group-item bg-transparent text-light border-secondary"><strong>Consumo TDP:</strong> {componente.tdp} W</li>}
              {componente.tipoMemoria && <li className="list-group-item bg-transparent text-light border-secondary"><strong>Tipo de Memoria:</strong> {componente.tipoMemoria}</li>}
              {componente.potenciaWatts && <li className="list-group-item bg-transparent text-light border-secondary"><strong>Potencia:</strong> {componente.potenciaWatts} W</li>}
            </ul>
            <button className="btn btn-primary-custom btn-lg w-100" onClick={() => alAgregar(componente)}>
              Agregar al Armador
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}