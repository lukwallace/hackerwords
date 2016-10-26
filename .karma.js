module.exports = function(config) {
    config.set({
        basePath: '.',

        frameworks: ['mocha', 'browserify'],

        files: [
            'client/**/*.js'
        ]

        preprocessors: {
            'client/**/*.js' ['browserify'],
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome'],

        singleRun: true,

        browserify: {
            debug: true,
            ignoreMissing: true,
            transform: [
                ['babelify', require('./bablerc')],
                ['envify', { NODE_ENV: 'development' }]
            ]
        }
    });
};