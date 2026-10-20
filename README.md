# Caso Semestral - BuildMyPC (Frontend) - Evaluación Parcial 2

## 👥 Integrantes
* Juan David Cordova
* Vicente Pizarro
* Ignacio Castro

## 📝 Descripción del Proyecto
BuildMyPC es una plataforma interactiva diseñada para armar computadores gamer personalizados. Este repositorio contiene la **Evaluación Parcial 2 (EP2)**, que representa la evolución del proyecto hacia una Single Page Application (SPA) utilizando **React** y el empaquetador **Vite**. 

En esta etapa, la base web estática previa ha sido refactorizada en un sistema de componentes reutilizables. Se ha incorporado **Bootstrap** para asegurar un diseño responsivo (manteniendo nuestra Paleta 5: RGB nocturno a través de variables CSS), enrutamiento del lado del cliente, manejo de estados dinámicos con Hooks (`useState`, `useEffect`) y la integración de un entorno sólido de pruebas unitarias automatizadas con **Jasmine y Karma**.

## 🚀 Requisitos Previos
Para ejecutar y probar este proyecto en tu entorno local, necesitas tener instalado:
* **Node.js** (Versión LTS recomendada, 20.19 o superior).
* Gestor de paquetes **npm** (incluido por defecto con Node.js).
* Un navegador web moderno (Google Chrome, Mozilla Firefox, Edge).

## ⚙️ Instrucciones de Ejecución
1. Descarga o clona el repositorio en tu equipo.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando el siguiente comando:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo local ejecutando:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en la dirección que indique la terminal (por defecto `http://localhost:5173`) para visualizar la plataforma.

## 📂 Estructura de Carpetas
El proyecto ha sido reestructurado modularmente para adaptarse a la arquitectura de React:

```text
📦 BuildMyPCsrc/
├── 📁 public/                          # Assets estáticos (imágenes de hardware como CPU, GPU, RAM)
├── 📁 src/
│   ├── 📁 __test__/                    # Archivos de pruebas unitarias (.spec.js) para lógica y componentes
│   ├── 📁 components/                  # Componentes reutilizables UI (armador, catálogo, layout, etc.)
│   │   ├── 📁 armador/
│   │   ├── 📁 catalogo/
│   │   └── 📁 layout/
│   ├── 📁 logica/                      # Reglas de negocio puras separadas de la vista
│   ├── 📁 services/                    # Archivo de datos simulados y servicio de persistencia
│   ├── 📁 utils/                       # Utilidades y funciones de reglas de compatibilidad
│   ├── 📁 views/                       # Vistas principales (Inicio, Catálogo, Armador, Cotización, Resultado)
│   ├── App.jsx                         # Componente raíz y definición de rutas lógicas
│   ├── index.css                       # Estilos globales y declaración de variables CSS
│   └── main.jsx                        # Punto de entrada de la aplicación React
├── karma.conf.cjs                      # Configuración del entorno de pruebas Karma
├── package.json                        # Dependencias de npm y scripts de ejecución
└── vite.config.js                      # Configuración de la herramienta de construcción Vite
```

## 🧪 Pruebas Unitarias
El frontend está cubierto por un entorno de testing para garantizar la fiabilidad del código y evitar regresiones.
* **Herramientas:** Jasmine (framework de testing) y Karma (ejecutor en navegador).
* Se incluyen pruebas que verifican tanto las funciones de cálculo/lógica pura, como el renderizado, paso de `props`, y simulación de eventos de los componentes React (utilizando dobles de prueba y espías).
* **Instrucciones para ejecutar las pruebas:**
  Abre la terminal en la raíz del proyecto y ejecuta:
  ```bash
  npm test
  ```
  *(Para mantener las pruebas corriendo en modo escucha ante cambios, puedes utilizar `npm run test:watch` si está configurado).*

## 🛠️ Aspectos Técnicos Destacados
* **Migración a Framework:** Refactorización total a **React** enfocada en el patrón de "Single Responsibility" por componente, aislando los estados cuando es necesario.
* **Diseño Responsivo:** Integración fluida con **Bootstrap** para la grilla y componentes, garantizando un funcionamiento óptimo en resoluciones móviles, tablets y escritorio (360px, 768px y 1280px).
* **Desacoplamiento Lógico:** Las reglas complejas de compatibilidad (validar socket, tipo de memoria RAM, suficiencia de fuente de poder, etc.) fueron extraídas a archivos JS independientes para facilitar su testeo unitario sin depender del DOM.
* **Simulación de Backend:** Implementación de un archivo JavaScript como fuente de datos persistente (CRUD simulado) manejando el paso de información en tiempo real a través de los componentes de React, allanando el camino para la integración final con la API REST de Spring Boot en la próxima etapa.