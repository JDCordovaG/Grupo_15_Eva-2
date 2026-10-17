import React from 'react';
import Hero from '../components/layout/Hero';
import Footer from '../components/layout/Footer';

export default function InicioView({ alNavegar }) {
  return (
    <div className="container py-4">
      <Hero alIrAlArmador={() => alNavegar('armador')} />
      <div className="row text-center g-4 my-4">
        <div className="col-md-4">
          <div className="card card-custom p-4 h-100">
            <i className="bi bi-shield-check text-success display-4 mb-3"></i>
            <h3>Compatibilidad Real</h3>
            <p className="">Verificación estricta de sockets, memorias RAM y fuentes de poder automáticamente.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom p-4 h-100">
            <i className="bi bi-lightning-charge text-warning display-4 mb-3"></i>
            <h3>Control de Energía</h3>
            <p className="">Cálculo exacto del TDP para asegurar estabilidad en equipos de alto rendimiento.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-custom p-4 h-100">
            <i className="bi bi-file-earmark-text text-info display-4 mb-3"></i>
            <h3>Cotizaciones Claras</h3>
            <p className="">Genera presupuestos detallados al instante listos para enviar por correo.</p>
          </div>
        </div>
        <div className="presentacion-video">
            <h2>¿Cómo funciona BuildMyPC?</h2>
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/uUGI3Grx4qU" title="Cómo Ensamblar una PC Básica PASO A PASO desde CERO 🔧  Guía 2025 BIEN EXPLICADA" frameborder="0" allowfullscreen></iframe>
      </div>
      </div>
      <Footer />
    </div>
  );
}