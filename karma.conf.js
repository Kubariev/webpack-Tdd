module.exports = function (config) {
  config.set({

    basePath: '',

    coverageReporter: {
      dir: 'test-coverage/',
      reporters: [
        { type: 'lcov', subdir: 'test-lcov' },
        { type: 'html', subdir: 'test-html' },
      ],
      instrumenterOptions: {
        istanbul: { noCompact: true },
      },
    },

    frameworks: ['jasmine'],

    reporters: ['coverage', 'mocha'],

    files: [
      './src/**/*.test.js',
    ],

    preprocessors: {
      './src/**/*.test.js': ['webpack', 'sourcemap'],
    },

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-coverage',
      'karma-chai',
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
    ],

    webpack: require('./config/webpack.testing'),
    port: 8082,
    logLevel: config.LOG_INFO,
    colors: true,
    concurrency: Infinity,
    browsers: ['PhantomJS'],

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },
  });
};
