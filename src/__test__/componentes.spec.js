import { act } from 'react';
import { createRoot } from 'react-dom/client';

// Rutas exactas para enlazar desde src/__test__/ hacia los componentes de la aplicación
import TarjetaComponente from '../components/catalogo/TarjetaComponente';
import SelectorComponente from '../components/armador/SelectorComponente';
import ResumenBuild from '../components/armador/ResumenBuild';
import CotizacionView from '../views/CotizacionView';

// Le indica a React que está en un entorno de pruebas para evitar advertencias[cite: 68]
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas de Componentes React: ', () => {
    let contenedor;
    let raiz;

    // Preparar el contenedor antes de cada prueba[cite: 68]
    beforeEach(() => {
        contenedor = document.createElement('div');
        document.body.appendChild(contenedor);
        raiz = createRoot(contenedor);
    });

    // Limpieza después de cada prueba para tener la pantalla vacía[cite: 68]
    afterEach(() => {
        act(() => raiz.unmount());
        contenedor.remove();
    });

    const renderizar = (componente) => act(() => raiz.render(componente));
    const clicEn = (boton) => act(() => boton.dispatchEvent(new MouseEvent('click', { bubbles: true })));

    // Prueba 7[cite: 78]
    it('TarjetaComponente renderiza marca, modelo y precio con el formato de moneda esperado:', () => {
        const componenteData = { marca: 'NVIDIA', modelo: 'RTX 4070', precio: 600000 };
        renderizar(<TarjetaComponente componente={componenteData} />);
        
        expect(contenedor.textContent).toContain('NVIDIA');
        expect(contenedor.textContent).toContain('RTX 4070');
        expect(contenedor.textContent).toContain('600.000'); // Asumiendo formatearPesos[cite: 63]
    });

    // Prueba 8[cite: 78]
    it('SelectorComponente invoca el manejador recibido por propiedades con el identificador correcto:', () => {
        const espia = jasmine.createSpy('onSelect'); // Creación del espía[cite: 66, 78]
        renderizar(<SelectorComponente componente={{ id: 101, nombre: 'CPU' }} onSelect={espia} />);
        
        const boton = contenedor.querySelector('button');
        clicEn(boton);
        
        expect(espia).toHaveBeenCalledWith(101); // Verifica con qué ID se llamó[cite: 66, 78]
    });

    // Prueba 9[cite: 78]
    it('ResumenBuild muestra el estado incompatible cuando al menos una regla falla:', () => {
        const reglasEvaluadas = [
            { nombre: 'Socket', valida: true },
            { nombre: 'Memoria', valida: false }
        ];
        renderizar(<ResumenBuild reglas={reglasEvaluadas} />);
        
        // Verifica en el texto renderizado
        expect(contenedor.textContent).toMatch(/incompatible/i);
    });

    // Prueba 10[cite: 78]
    it('FormularioCotizacion mantiene deshabilitado el envío mientras falte un componente obligatorio o el correo sea inválido:', () => {
        // Renderizamos la vista de cotización simulando que la build no está lista o falta correo
        renderizar(<CotizacionView buildValida={false} correoValido={false} />);
        
        const botonSubmit = contenedor.querySelector('button[type="submit"]');
        expect(botonSubmit.disabled).toBeTrue();
    });
});