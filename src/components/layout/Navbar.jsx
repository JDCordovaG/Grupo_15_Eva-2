import React from 'react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export default function Navbar({ vistaActual, cambiarVista, totalCarrito = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom border-bottom border-secondary sticky-top px-3">
      <div className="container-fluid">
        <a className="navbar-brand text-success fw-bold fs-4" href="#" onClick={() => cambiarVista('inicio')}>
          <i className="bi bi-cpu me-2"></i>BuildMyPC
        </a>
        <div className="navbar-nav me-auto flex-row gap-3">
          <button className={`btn btn-link nav-link ${vistaActual === 'inicio' ? 'active fw-bold' : ''}`} onClick={() => cambiarVista('inicio')}>Inicio</button>
          <button className={`btn btn-link nav-link ${vistaActual === 'catalogo' ? 'active fw-bold' : ''}`} onClick={() => cambiarVista('catalogo')}>Catálogo</button>
          <button className={`btn btn-link nav-link ${vistaActual === 'armador' ? 'active fw-bold' : ''}`} onClick={() => cambiarVista('armador')}>Armador</button>
          <button className={`btn btn-link nav-link ${vistaActual === 'categorias' ? 'active fw-bold' : ''}`} onClick={() => cambiarVista('categorias')}>Categorías</button>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge bg-success fs-6"><i className="bi bi-cart me-1"></i>${totalCarrito.toLocaleString('es-CL')}</span>
        </div>
      </div>
    </nav>
  );
}