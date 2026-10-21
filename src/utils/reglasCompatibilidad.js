export function calcularConsumoTotal(cpu, gpu, consumoBase = 100) {
  const tdpCpu = cpu ? cpu.tdp : 0;
  const tdpGpu = gpu ? gpu.tdp : 0;
  return tdpCpu + tdpGpu + consumoBase;
}

export function validarSocket(cpu, placa) {
  if (!cpu || !placa) return true;
  return cpu.socket === placa.socket;
}

export function validarTipoMemoria(ram, placa) {
  if (!ram || !placa) return true;
  return ram.tipoMemoria === placa.tipoMemoria;
}

export function validarCapacidadMemoria(ram, placa) {
  if (!ram || !placa) return true;
  return ram.capacidadGB <= placa.maxRAM;
}

export function fuenteEsSuficiente(fuente, consumoTotal, margen = 0.20) {
  if (!fuente) return true;
  return fuente.potenciaWatts >= consumoTotal * (1 + margen);
}

export function calcularSubtotal(build) {
  return Object.values(build || {}).reduce((acc, comp) => acc + (comp ? comp.precio : 0), 0);
}