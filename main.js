
require("babel-polyfill");
require('babel-register')({
    presets: [ 'es2015', 'stage-0' ],
    plugins: ["syntax-async-functions", "transform-async-to-generator"]
});

require('./fsa/index');

