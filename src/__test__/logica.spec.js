// Rutas exactas para enlazar desde src/__test__/ hacia src/logica/ y src/utils/
import { calcularConsumoTotal, calcularSubtotal } from '../logica/armador';
import { validarSocket, validarTipoMemoria, validarCapacidadMemoria, fuenteEsSuficiente } from '../utils/reglasCompatibilidad';

describe('Pruebas de Lógica de Armador y Compatibilidad:', () => {

    // Prueba 1[cite: 78]
    it('calcularConsumoTotal suma el TDP del procesador y de la tarjeta gráfica más el consumo base definido:', () => {
        const procesador = 65;
        const tarjetaGrafica = 200;
        const consumoBase = 50; 
        expect(calcularConsumoTotal(procesador, tarjetaGrafica, consumoBase)).toBe(315);
    });

    // Prueba 2[cite: 78]
    it('validarSocket retorna falso cuando el socket del procesador difiere del de la placa madre:', () => {
        const procesador = { socket: 'AM5' };
        const placa = { socket: 'LGA1700' };
        expect(validarSocket(procesador, placa)).toBeFalse();
    });

    // Prueba 3[cite: 78]
    it('validarTipoMemoria rechaza una memoria DDR4 sobre una placa que solo soporta DDR5:', () => {
        const memoria = { tipo: 'DDR4' };
        const placa = { tipoMemoria: 'DDR5' };
        expect(validarTipoMemoria(memoria, placa)).toBeFalse();
    });

    // Prueba 4[cite: 78]
    it('validarCapacidadMemoria rechaza una capacidad total superior al máximo admitido por la placa:', () => {
        const memoria = { capacidad: 64 };
        const placa = { maxMemoria: 32 };
        expect(validarCapacidadMemoria(memoria, placa)).toBeFalse();
    });

    // Prueba 5[cite: 78]
    it('fuenteEsSuficiente exige que la potencia supere el consumo estimado con el margen definido:', () => {
        const fuente = { potenciaWatts: 500 };
        // Consumo 450 + 20% (margen) = 540 -> Falso
        expect(fuenteEsSuficiente(fuente, 450, 0.20)).toBeFalse();
        // Consumo 400 + 20% (margen) = 480 -> Verdadero
        expect(fuenteEsSuficiente(fuente, 400, 0.20)).toBeTrue();
    });

    // Prueba 6[cite: 78]
    it('calcularSubtotal suma los precios de los componentes seleccionados e ignora las posiciones vacías:', () => {
        const seleccionados = [
            { precio: 150000 },
            null,
            { precio: 50000 },
            undefined
        ];
        expect(calcularSubtotal(seleccionados)).toBe(200000);
    });
});