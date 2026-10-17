import React, { useState } from 'react';
import { calcularSubtotal } from '../utils/reglasCompatibilidad';

export default function CotizacionView({ build }) {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', comentarios: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const total = calcularSubtotal(build);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validar = () => {
    const err = {};
    if (!form.nombre.trim() || form.nombre.trim().length < 3) err.nombre = 'Nombre obligatorio (mínimo 3 caracteres)';
    if (!form.correo.includes('@') || !form.correo.includes('.')) err.correo = 'Ingrese un correo electrónico válido';
    if (!/^\d{9}$/.test(form.telefono)) err.telefono = 'El teléfono debe ser numérico de 9 dígitos';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    if (Object.keys(err).length === 0) {
      setEnviado(true);
    }
  };

  if (enviado) {
    return (
      <div className="container py-5 text-center">
        <div className="card card-custom p-5 max-width-600 mx-auto">
          <i className="bi bi-check-circle-fill text-success display-1 mb-3"></i>
          <h2>¡Cotización Solicitada con Éxito!</h2>
          <p className="">Hemos enviado el detalle del presupuesto al correo <strong>{form.correo}</strong>.</p>
          <h4 className="text-success mt-3">Total Estimado: ${total.toLocaleString('es-CL')}</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-light mb-4">Solicitud de Cotización</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card card-custom p-4">
            <h4 className="border-bottom border-secondary pb-2 mb-3">Datos del Cliente</h4>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input name="nombre" value={form.nombre} onChange={handleChange} className="form-control bg-dark text-light border-secondary" />
                {errores.nombre && <small className="text-error">{errores.nombre}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input name="correo" type="email" value={form.correo} onChange={handleChange} className="form-control bg-dark text-light border-secondary" />
                {errores.correo && <small className="text-error">{errores.correo}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Teléfono (9 dígitos)</label>
                <input name="telefono" value={form.telefono} onChange={handleChange} className="form-control bg-dark text-light border-secondary" placeholder="912345678" />
                {errores.telefono && <small className="text-error">{errores.telefono}</small>}
              </div>
              <div className="mb-3">
                <label className="form-label">Comentarios</label>
                <textarea name="comentarios" value={form.comentarios} onChange={handleChange} className="form-control bg-dark text-light border-secondary" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary-custom w-100 py-2">Emitir Cotización</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-custom p-4">
            <h4 className="border-bottom border-secondary pb-2 mb-3">Detalle Económico</h4>
            {Object.entries(build).map(([tipo, comp]) => (
              <div key={tipo} className="d-flex justify-content-between border-bottom border-secondary py-2">
                <span><strong>{tipo}:</strong> {comp?.modelo}</span>
                <span>${comp?.precio.toLocaleString('es-CL')}</span>
              </div>
            ))}
            <div className="d-flex justify-content-between fs-4 fw-bold text-success mt-4">
              <span>Total final:</span>
              <span>${total.toLocaleString('es-CL')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}