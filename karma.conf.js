module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress', 'coverage'], // Adicione "coverage"
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // Gera um relatório em HTML
        { type: 'text-summary' } // Mostra um resumo no terminal
      ]
    },
    browsers: ['ChromeHeadless'], // Executa os testes em um navegador sem interface gráfica
  });
};
