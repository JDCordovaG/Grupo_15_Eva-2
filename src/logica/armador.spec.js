// src/logica/armador.spec.js
import { 
  calcularConsumoTotal, 
  validarSocket, 
  validarTipoMemoria, 
  validarCapacidadMemoria, 
  fuenteEsSuficiente, 
  calcularSubtotal 
} from './armador.js';

describe('Pruebas Unitarias - BuildMyPC (EP2)', () => {
  
  // 1. Consumo total
  it('1. calcularConsumoTotal suma el TDP de CPU, GPU y consumo base', () => {
    const total = calcularConsumoTotal(65, 220, 50);
    expect(total).toBe(335);
  });

  // 2. Validar Socket
  it('2. validarSocket retorna falso cuando el socket del procesador difiere del de la placa', () => {
    const resultado = validarSocket('LGA1700', 'AM5');
    expect(resultado).toBeFalse();
  });

  // 3. Validar Tipo Memoria
  it('3. validarTipoMemoria rechaza memoria DDR4 sobre placa que solo soporta DDR5', () => {
    const resultado = validarTipoMemoria('DDR4', 'DDR5');
    expect(resultado).toBeFalse();
  });

  // 4. Capacidad de memoria
  it('4. validarCapacidadMemoria rechaza una capacidad superior al máximo admitido', () => {
    const resultado = validarCapacidadMemoria(128, 64);
    expect(resultado).toBeFalse();
  });

  // 5. Fuente suficiente
  it('5. fuenteEsSuficiente exige que la potencia supere el consumo con margen del 20%', () => {
    // Consumo = 500W -> Requerido +20% = 600W. 550W no alcanza.
    const esSuficiente = fuenteEsSuficiente(550, 500, 0.20);
    expect(esSuficiente).toBeFalse();
  });

  // 6. Calcular Subtotal
  it('6. calcularSubtotal suma los precios e ignora posiciones vacías/nulas', () => {
    const seleccion = [
      { precio: 150000 },
      null,
      { precio: 200000 },
      undefined
    ];
    expect(calcularSubtotal(seleccion)).toBe(350000);
  });

});