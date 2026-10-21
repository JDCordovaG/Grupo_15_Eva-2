import { act } from 'react';
import { createRoot } from 'react-dom/client';

import TarjetaComponente from '../components/catalogo/TarjetaComponente';
import SelectorComponente from '../components/armador/SelectorComponente';
import ResumenBuild from '../components/armador/ResumenBuild';
import CotizacionView from '../views/CotizacionView';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas de Componentes React: ', () => {
    let contenedor;
    let raiz;

    beforeEach(() => {
        contenedor = document.createElement('div');
        document.body.appendChild(contenedor);
        raiz = createRoot(contenedor);
    });

    afterEach(() => {
        act(() => raiz.unmount());
        contenedor.remove();
    });

    const renderizar = (componente) => act(() => raiz.render(componente));
    const clicEn = (boton) => act(() => boton.dispatchEvent(new MouseEvent('click', { bubbles: true })));

    it('TarjetaComponente renderiza marca, modelo y precio con el formato de moneda esperado:', () => {
        const componenteData = { marca: 'NVIDIA', modelo: 'RTX 4070', precio: 600000 };
        renderizar(<TarjetaComponente componente={componenteData} />);
        
        expect(contenedor.textContent).toContain('NVIDIA');
        expect(contenedor.textContent).toContain('RTX 4070');
        expect(contenedor.textContent).toContain('600.000');
    });

    it('SelectorComponente invoca el manejador recibido por propiedades con el identificador correcto:', () => {
        const espia = jasmine.createSpy('alAbrirSelector'); 
        renderizar(<SelectorComponente categoria="CPU" componenteElegido={{ id: 101, modelo: 'Ryzen 5' }} alAbrirSelector={() => espia(101)} />);
        
        const boton = contenedor.querySelector('button');
        clicEn(boton);
        
        expect(espia).toHaveBeenCalledWith(101); 
    });

    it('ResumenBuild muestra el estado incompatible cuando al menos una regla falla:', () => {
        const reglasEvaluadas = [
            { nombre: 'Socket', valida: true },
            { nombre: 'Memoria', valida: false }
        ];
        renderizar(<ResumenBuild reglas={reglasEvaluadas} build={{}} />);
        
        expect(contenedor.textContent).toMatch(/incompatible/i);
    });

    it('FormularioCotizacion mantiene deshabilitado el envío mientras falte un componente obligatorio o el correo sea inválido:', () => {
        renderizar(<CotizacionView buildValida={false} correoValido={false} build={{}} />);
        
        const botonSubmit = contenedor.querySelector('button[type="submit"]');
        expect(botonSubmit.disabled).toBeTrue();
    });
});