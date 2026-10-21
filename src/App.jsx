import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import InicioView from './views/InicioView';
import CatalogoView from './views/CatalogoView';
import ArmadorView from './views/ArmadorView';
import ResultadoView from './views/ResultadoView';
import CotizacionView from './views/CotizacionView';
import DetalleComponenteView from './views/DetalleComponenteView';
import CategoriasView from './views/CategoriasView';
import { persistenciaService } from './services/persistenciaService';
import { DATOS_INICIALES_CATALOGO } from './services/datosSimulados';
import { calcularSubtotal } from './utils/reglasCompatibilidad';
import './App.css';

export default function App() {
  const [vista, setVista] = useState('inicio');
  const [componentes, setComponentes] = useState([]);
  const [build, setBuild] = useState({ CPU: null, GPU: null, Placa: null, RAM: null, Fuente: null });
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('buildmypc_componentes')) {
      localStorage.setItem('buildmypc_componentes', JSON.stringify(DATOS_INICIALES_CATALOGO));
    }
    setComponentes(persistenciaService.obtenerComponentes());
    setBuild(persistenciaService.obtenerBuildActual());
  }, []);

  const handleSeleccionarComponenteBuild = (tipo, componente) => {
    const nuevaBuild = { ...build, [tipo]: componente };
    setBuild(nuevaBuild);
    persistenciaService.guardarBuildActual(nuevaBuild);
  };

  const handleVerDetalle = (comp) => {
    setComponenteSeleccionado(comp);
    setVista('detalle');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar vistaActual={vista} cambiarVista={setVista} totalCarrito={calcularSubtotal(build)} />
      
      <div className="flex-grow-1">
        {vista === 'inicio' && <InicioView alNavegar={setVista} />}
        {vista === 'catalogo' && (
          <CatalogoView 
            componentes={componentes} 
            alSeleccionarComponente={(c) => handleSeleccionarComponenteBuild(c.tipo, c)} 
            alVerDetalle={handleVerDetalle}
          />
        )}
        {vista === 'categorias' && (
          <CategoriasView alSeleccionarCategoria={(cat) => setVista('catalogo')} />
        )}
        {vista === 'detalle' && (
          <DetalleComponenteView 
            componente={componenteSeleccionado} 
            alVolver={() => setVista('catalogo')}
            alAgregar={(c) => {
              handleSeleccionarComponenteBuild(c.tipo, c);
              setVista('armador');
            }}
          />
        )}
        {vista === 'armador' && (
          <ArmadorView 
            componentes={componentes} 
            build={build} 
            alSeleccionar={handleSeleccionarComponenteBuild}
            alVerCompatibilidad={() => setVista('resultado')}
          />
        )}
        {vista === 'resultado' && (
          <ResultadoView build={build} alIrACotizar={() => setVista('cotizacion')} />
        )}
        {vista === 'cotizacion' && <CotizacionView build={build} />}
      </div>
    </div>
  );
}