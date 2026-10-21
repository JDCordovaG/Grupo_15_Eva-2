export function calcularConsumoTotal(cpuTdp, gpuTdp, consumoBase = 50) {
  return Number(cpuTdp || 0) + Number(gpuTdp || 0) + consumoBase;
}

export function validarSocket(socketCpu, socketPlaca) {
  if (!socketCpu || !socketPlaca) return false;
  return socketCpu.trim().toLowerCase() === socketPlaca.trim().toLowerCase();
}

export function validarTipoMemoria(tipoRam, tipoSoportadoPlaca) {
  if (!tipoRam || !tipoSoportadoPlaca) return false;
  return tipoRam.trim().toUpperCase() === tipoSoportadoPlaca.trim().toUpperCase();
}

export function validarCapacidadMemoria(ramTotal, maxPlaca) {
  return Number(ramTotal) <= Number(maxPlaca);
}

export function fuenteEsSuficiente(potenciaFuente, consumoEstimado, margen = 0.20) {
  const minimoRequerido = consumoEstimado * (1 + margen);
  return Number(potenciaFuente) >= minimoRequerido;
}

export function calcularSubtotal(componentes = []) {
  return componentes.reduce((acc, comp) => {
    if (comp && comp.precio) {
      return acc + Number(comp.precio);
    }
    return acc;
  }, 0);
}