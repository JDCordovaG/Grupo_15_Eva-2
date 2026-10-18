const COMPONENTES_INICIALES = [
  { id: 'cpu-1', tipo: 'CPU', marca: 'AMD', modelo: 'Ryzen 7 7800X3D', socket: 'AM5', precio: 389990, tdp: 120, imagen: '/cpu-ryzen.jpg' },
  { id: 'cpu-2', tipo: 'CPU', marca: 'Intel', modelo: 'Core i5-13600K', socket: 'LGA1700', precio: 299990, tdp: 125, imagen: 'https://via.placeholder.com/300?text=Core+i5' },
  { id: 'gpu-1', tipo: 'GPU', marca: 'NVIDIA', modelo: 'RTX 4070 Super 12GB', precio: 649990, tdp: 220, imagen: 'https://via.placeholder.com/300?text=RTX+4070' },
  { id: 'gpu-2', tipo: 'GPU', marca: 'AMD', modelo: 'Radeon RX 7800 XT 16GB', precio: 529990, tdp: 263, imagen: 'https://via.placeholder.com/300?text=RX+7800XT' },
  { id: 'mb-1', tipo: 'Placa', marca: 'ASUS', modelo: 'ROG Strix B650-F', socket: 'AM5', tipoMemoria: 'DDR5', maxRAM: 128, precio: 219990, tdp: 50, imagen: 'https://via.placeholder.com/300?text=B650-F' },
  { id: 'mb-2', tipo: 'Placa', marca: 'MSI', modelo: 'MAG Z790 Tomahawk', socket: 'LGA1700', tipoMemoria: 'DDR4', maxRAM: 128, precio: 249990, tdp: 50, imagen: 'https://via.placeholder.com/300?text=Z790' },
  { id: 'ram-1', tipo: 'RAM', marca: 'Corsair', modelo: 'Vengeance DDR5 32GB (2x16)', tipoMemoria: 'DDR5', capacidadGB: 32, precio: 109990, tdp: 10, imagen: 'https://via.placeholder.com/300?text=DDR5+32GB' },
  { id: 'ram-2', tipo: 'RAM', marca: 'Kingston', modelo: 'Fury Beast DDR4 16GB', tipoMemoria: 'DDR4', capacidadGB: 16, precio: 45990, tdp: 8, imagen: 'https://via.placeholder.com/300?text=DDR4+16GB' },
  { id: 'psu-1', tipo: 'Fuente', marca: 'Corsair', modelo: 'RM750e 750W 80+ Gold', potenciaWatts: 750, precio: 99990, tdp: 0, imagen: 'https://via.placeholder.com/300?text=PSU+750W' },
  { id: 'psu-2', tipo: 'Fuente', marca: 'EVGA', modelo: '600 W1 600W 80+', potenciaWatts: 600, precio: 49990, tdp: 0, imagen: 'https://via.placeholder.com/300?text=PSU+600W' }
];

export const persistenciaService = {
  obtenerComponentes: () => {
    const data = localStorage.getItem('buildmypc_componentes');
    if (!data) {
      localStorage.setItem('buildmypc_componentes', JSON.stringify(COMPONENTES_INICIALES));
      return COMPONENTES_INICIALES;
    }
    return JSON.parse(data);
  },
  obtenerBuildActual: () => {
    const build = localStorage.getItem('buildmypc_build');
    return build ? JSON.parse(build) : { CPU: null, GPU: null, Placa: null, RAM: null, Fuente: null };
  },
  guardarBuildActual: (build) => {
    localStorage.setItem('buildmypc_build', JSON.stringify(build));
  }
};