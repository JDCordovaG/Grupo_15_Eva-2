// karma.conf.cjs
module.exports = function (config) {
  config.set({
    basePath: '',
    
    // Asegura la carga explicita de plugins
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-esbuild')
    ],

    files: [
      // Especifica los archivos a procesar
      { pattern: 'src/**/*.spec.js', watched: false },
      { pattern: 'src/**/*.spec.jsx', watched: false }
    ],

    preprocessors: {
      'src/**/*.spec.js': ['esbuild'],
      'src/**/*.spec.jsx': ['esbuild']
    },

    esbuild: {
      target: 'es2022',
      jsx: 'automatic',
      loader: { '.js': 'jsx', '.jsx': 'jsx' }
    },

    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    concurrency: 1
  });
};