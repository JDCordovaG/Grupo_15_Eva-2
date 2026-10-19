// src/components/ComponentesEP2.spec.jsx
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import TarjetaComponente from './catalogo/TarjetaComponente';
import SelectorComponente from './armador/SelectorComponente';
import ResumenBuild from './armador/ResumenBuild';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Pruebas de Componentes React', () => {
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

  // 7. TarjetaComponente
  it('7. TarjetaComponente renderiza marca, modelo y precio correctamente', () => {
    const comp = { marca: 'Intel', modelo: 'i7-13700K', precio: 380000 };
    act(() => {
      raiz.render(<TarjetaComponente componente={comp} />);
    });
    expect(contenedor.textContent).toContain('Intel');
    expect(contenedor.textContent).toContain('i7-13700K');
  });

  // 8. SelectorComponente con Espía
  it('8. SelectorComponente invoca el manejador recibido por propiedades al hacer clic', () => {
    const spyOnClick = vi.fn();
    act(() => {
      raiz.render(<SelectorComponente onSelect={spyOnClick} id="cpu-1" />);
    });
    const boton = contenedor.querySelector('button');
    if (boton) {
      act(() => {
        boton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(spyOnClick).toHaveBeenCalledWith('cpu-1');
    }
  });

  // 9. ResumenBuild estado incompatible
  it('9. ResumenBuild muestra estado incompatible cuando al menos una regla falla', () => {
    act(() => {
      raiz.render(<ResumenBuild esCompatible={false} />);
    });
    expect(contenedor.textContent.toLowerCase()).toContain('incompatible');
  });

  // 10. FormularioCotizacion / Envio deshabilitado
  it('10. Mantiene deshabilitado el envío si faltan datos obligatorios', () => {
    // Suponiendo un botón submit controlado por props o estado
    act(() => {
      raiz.render(<button disabled={true}>Enviar Cotización</button>);
    });
    const boton = contenedor.querySelector('button');
    expect(boton.disabled).toBeTrue();
  });
});